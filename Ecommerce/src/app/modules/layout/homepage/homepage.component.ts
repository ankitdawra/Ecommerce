import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PageComponent } from '../page';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from '@app/core/services';
import { ProductService } from '../../product/services';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
})
export class HomePageComponent extends PageComponent implements OnInit {
  items: any;
  collections: any;
  categoryProducts$: Observable<any>;

  constructor(
    protected activatedRoute: ActivatedRoute,
    protected seoService: SeoService,
    protected productService: ProductService
  ) {
    super(activatedRoute, seoService);
  }

  ngOnInit() {
    super.ngOnInit();
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
    this.loadCollections();
    this.categoryProducts$ = this.productService
      .getProductsByCategory('featured')
      .pipe(
        map((res: any) => {
          console.log(res, 'test');
          return res || [];
        })
      );
  }

  loadCollections() {
    this.collections = [
      'https://shop.azelab.com/images/home-1/banner-1.jpg',
      'https://shop.azelab.com/images/home-1/banner-2.jpg',
      'https://shop.azelab.com/images/home-1/banner-3.jpg',
    ];
  }
}
