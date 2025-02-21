import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product/services';
import { Product } from 'src/app/app.model';
import { Observable, map, shareReplay, switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { PageComponent } from '../page';
import { SeoService } from '@app/core/services';

@Component({
  selector: 'product-page',
  templateUrl: './productpage.component.html',
})
export class ProductPageComponent extends PageComponent implements OnInit {
  product$: Observable<Product | any>;
  similarProducts$: Observable<Product[] | any>;
  selectedVariant: any = {};
  currQuantity = 1;
  constructor(
    private productService: ProductService,
    protected activatedRoute: ActivatedRoute,
    protected seoService: SeoService
  ) {
    super(activatedRoute, seoService);
  }
  ngOnInit() {
    super.ngOnInit();
    this.product$ = this.productService
      .getProductByCode(this.activatedRoute.snapshot.params['id'])
      .pipe(shareReplay(1));

    this.similarProducts$ = this.product$.pipe(
      map((product: any) => {
        return product.tags || [];
      }),
      switchMap((tags: any) => {
        return this.productService.searchProducts(tags[0]);
      })
    );
  }
  selectVariant(variant: any) {
    console.log('Variant selected', variant);
  }
  onAddToCart() {
    console.log('Add to cart clicked');
  }
}
