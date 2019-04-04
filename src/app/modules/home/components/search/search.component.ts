import { Component, OnInit } from '@angular/core';
import {GiphyService} from "../../services/giphy.service";
import {Gif} from "../../models/gif";
import {GiphyResponse} from "../../models/response";
import {StorageService} from "../../services/storage.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchTerm : string;
  offset: number = 0;
  gifs: String[] = [];

  constructor(
    private giphyService: GiphyService,
    private storageService: StorageService
  ){ }

  ngOnInit() {
  }

  getGifs(action : string){
    if(action === "new"){
      this.gifs.length = 0;
      this.offset = 0;
    } else if(action === "load"){
      this.offset += 25;
    }
    this.giphyService.getGifs(this.searchTerm, this.offset).subscribe(
      (res: GiphyResponse) => {
        if(res.data.length > 0){
          for(let i=0; i < res.data.length; i++){
            let string = "https://i.giphy.com/media/" + (res.data[i] as Gif).id + "/200.gif";
            this.gifs.push(string);
          }
        }
      }
    )
  }

  saveGif(url: string){
    this.storageService.saveGif(url);
  }

}
