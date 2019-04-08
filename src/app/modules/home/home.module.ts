import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import {RouteReuseStrategy, RouterModule} from '@angular/router';


import { HomeComponent } from './home.component';
import { SearchComponent } from './components/search/search.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { NavComponent } from './components/nav/nav.component';
import {GiphyService} from "./services/giphy.service";
import {StorageService} from "./services/storage.service";
import {FormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {HttpErrorInterceptor} from "../../Interceptors/http-error.interceptor";
import { DetailpageComponent } from './components/detailpage/detailpage.component';

@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
    FavouritesComponent,
    NavComponent,
    DetailpageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    RouterModule

  ],
  providers: [
    GiphyService,
    StorageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ]
})
export class HomeModule { }
