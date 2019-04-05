import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, throwError} from "rxjs";
import {GiphyResponse} from "../models/response";
import {catchError, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  private api_key = "vf7nDm11F3X2Pe63jIGjWWPiFCFCZXM8";
  private search_url = "https://api.giphy.com/v1/gifs/search?";

  constructor(private http: HttpClient) {
  }

  public getGifs(term: string, offset: number): Observable<GiphyResponse>{
    const request = this.search_url + "api_key=" + this.api_key + "&q=" + term + "&offset=" + offset;
    return this.http.get<GiphyResponse>(request)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  handleError(error){
    let errorMessage = '';
    if(error.error instanceof ErrorEvent){
      errorMessage = "Error: " + error.error.message;
    } else {
      errorMessage = "Error Code: " + error.status + "\nMessage: " + error.message;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
