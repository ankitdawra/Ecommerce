import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product/services';
import { Product } from 'src/app/app.model';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { PageComponent } from '../page';
import { SeoService } from '@app/core/services';

@Component({
  selector: 'product-page',
  templateUrl: './productpage.component.html',
})
export class ProductPageComponent extends PageComponent implements OnInit {
  product$: Observable<Product | any>;
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
    console.log('Product page init');
    super.ngOnInit();
    this.product$ = this.productService.getProductByCode(
      this.activatedRoute.snapshot.params['id']
    );
  }
  selectVariant(variant: any) {
    console.log('Variant selected', variant);
  }
  onAddToCart() {
    console.log('Add to cart clicked');
  }
}
