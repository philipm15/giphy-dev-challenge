import { Component, OnInit } from '@angular/core';
import {routerTransition, slideToRight} from "../../route-animation";
import {RouterOutlet} from "@angular/router";
import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    routerTransition()
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
