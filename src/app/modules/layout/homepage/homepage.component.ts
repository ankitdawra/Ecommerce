import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
})
export class HomePageComponent implements OnInit {
  items: any;

  constructor() {}

  ngOnInit() {
    this.items = [
      {
        title: 'Summer Collection',
        desc: 'UPGRADE YOUR STYLE WITS US ALL THE FASHION TRENDS YOU NEED THIS SEASON FILL YOUR CLOSET RIGHT NOW',
        src: 'assets/homepage-bg1.jpg',
        button: {
          text: 'Go to collection',
        },
      },
      {
        title: 'HEADING 2',
        desc: 'Shop+ SUPER ELEGANT SHOP',
        src: 'assets/homepage-bg2.jpg',
      },
      {
        title: 'WE DESIGNED ELEGANT AND FUNCTIONAL SHOP',
        desc: 'Shop+ beautiful and functional shop, we included many options and shortcodes. This package has everythink if you need to start your business',
        src: 'assets/homepage-bg3.jpg',
      },
    ];
  }
}
