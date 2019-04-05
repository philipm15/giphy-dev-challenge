import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private http: HttpClient) { }

  gifStorage : Array<string> = new Array<string>();

  saveGif(url: string){
    this.gifStorage.push(url);
    localStorage.setItem("favourites", JSON.stringify(this.gifStorage));
  }

  getGifs(){
    if(localStorage.getItem("favourites")){
      return this.gifStorage = JSON.parse(localStorage.getItem("favourites"));
    }

  }

  deleteGif(index: number){
    this.gifStorage.splice(index, 1);
    localStorage.setItem("favourites", JSON.stringify(this.gifStorage));
  }

}
