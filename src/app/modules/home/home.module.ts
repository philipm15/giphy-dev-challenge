import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';


import { HomeComponent } from './home.component';
import { SearchComponent } from './components/search/search.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { NavComponent } from './components/nav/nav.component';
import {GiphyService} from "./services/giphy.service";
import {StorageService} from "./services/storage.service";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
    FavouritesComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,

  ],
  providers: [
    GiphyService,
    StorageService
  ]
})
export class HomeModule { }
