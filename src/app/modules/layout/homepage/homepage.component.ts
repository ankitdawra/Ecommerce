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
        src: 'assets/homepage-bg2.jpg',
      },
    ];
  }
}
