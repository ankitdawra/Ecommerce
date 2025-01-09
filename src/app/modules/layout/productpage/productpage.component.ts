import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product/services';
import { Product } from 'src/app/app.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'product-page',
  templateUrl: './productpage.component.html',
})
export class ProductPageComponent implements OnInit {
  product$: Observable<Product>;
  selectedVariant: any = {};
  currQuantity = 1;
  constructor(private productService: ProductService) {}
  ngOnInit() {
    this.product$ = this.productService.getProductByCode(123);
  }
  selectVariant(variant: any) {
    console.log('Variant selected', variant);
  }
  onAddToCart() {
    console.log('Add to cart clicked');
  }
}
