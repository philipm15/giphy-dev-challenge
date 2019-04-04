import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchComponent} from "./components/search/search.component";
import {FavouritesComponent} from "./components/favourites/favourites.component";
import {HomeComponent} from "./home.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: '/search',
        pathMatch: 'full'
      },
      {
        path: 'favs',
        component: FavouritesComponent
      },
      {
        path: 'search',
        component: SearchComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
