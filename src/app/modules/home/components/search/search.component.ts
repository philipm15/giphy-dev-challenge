import {Component, HostListener, OnInit, OnDestroy} from '@angular/core';
import {GiphyService} from "../../services/giphy.service";
import {Gif} from "../../models/gif";
import {GiphyResponse} from "../../models/response";
import {StorageService} from "../../services/storage.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {


  isFixed : boolean = false;
  searchTerm : string;
  offset: number = 0;
  gifs: Gif[] = [];

  constructor(
    private giphyService: GiphyService,
    private storageService: StorageService
  ){ }

  ngOnInit() {
    if(localStorage.getItem("term") && localStorage.getItem("cache")){
      this.searchTerm = localStorage.getItem("term");
      this.gifs = JSON.parse(localStorage.getItem("cache"));
      window.scroll(0, +localStorage.getItem("y"));
    }
  }

  ngOnDestroy(){
    if(this.gifs.length > 0){
      localStorage.setItem("cache", JSON.stringify(this.gifs));
      localStorage.setItem("term", this.searchTerm);
      localStorage.setItem("y", ""+window.scrollY);
    }
  }

  @HostListener('window:scroll', ['$event'])
  trackScroll(event){
    if(window.pageYOffset > 60){
      this.isFixed = true;
    } else {
      this.isFixed = false;
    }
  }

  getGifs(action : string, event?: any){
    if(action === "new"){
      this.gifs.length = 0;
      this.offset = 0;
    } else if(action === "load"){
      this.offset += 25;
    }

    if(event){
      if(event.target.searchTerm.value){
        this.searchTerm = event.target.searchTerm.value;
      } else {
        this.searchTerm = "random";
      }

    }

    this.giphyService.getGifs(this.searchTerm, this.offset).subscribe(
      (res: GiphyResponse) => {
        if(res.data.length > 0){
          for(let i=0; i < res.data.length; i++){
            let gif = new Gif();
            let string = "https://i.giphy.com/media/" + res.data[i].id + "/200.gif";
            gif = res.data[i];
            gif.directUrl = string;
            this.gifs.push(gif);
          }
        } else {
          window.alert("No results found for: " + this.searchTerm);
        }
      }
    )
  }

  saveGif(url: string){
    this.storageService.saveGif(url);
  }

  imgLoaded(){
    //console.log("image loaded");
  }

  detail(gif: Gif){
    console.log("click");
  }

}
