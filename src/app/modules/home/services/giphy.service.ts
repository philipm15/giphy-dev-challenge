import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  private api_key = "vf7nDm11F3X2Pe63jIGjWWPiFCFCZXM8";
  private search_url = "https://api.giphy.com/v1/gifs/search?";

  constructor(private http: HttpClient) {
  }

  public getGifs(term: string, offset: number){
    const request = this.search_url + "api_key=" + this.api_key + "&q=" + term + "&offset=" + offset;
    return this.http.get(request);
  }

}
