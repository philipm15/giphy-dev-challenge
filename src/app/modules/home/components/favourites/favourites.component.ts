import { Component, OnInit } from '@angular/core';
import {StorageService} from "../../services/storage.service";

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  gifs : Array<string>;

  constructor(private storageService: StorageService) { }

  ngOnInit() {
    this.gifs = this.storageService.getGifs();
  }

  deleteGif(index : number){
    this.storageService.deleteGif(index);
  }


}
