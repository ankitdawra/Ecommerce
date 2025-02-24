import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product/services';
import { Product } from 'src/app/app.model';
import { Observable, filter, map, shareReplay, switchMap, tap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { PageComponent } from '../page';
import { SeoService } from '@app/core/services';

function removeSpecialChars(str: string) {
  return str?.replace(/[^a-zA-Z ]/g, '');
}
@Component({
  selector: 'product-page',
  templateUrl: './productpage.component.html',
})
export class ProductPageComponent extends PageComponent implements OnInit {
  product$: Observable<Product | any>;
  similarProducts$: Observable<Product[] | any>;
  selectedVariant: any = {};
  currQuantity = 1;
  activeItem = 0;
  productId: string;
  constructor(
    private productService: ProductService,
    protected activatedRoute: ActivatedRoute,
    protected seoService: SeoService
  ) {
    super(activatedRoute, seoService);
  }

  ngOnInit() {
    super.ngOnInit();
    this.product$ = this.activatedRoute.params.pipe(
      tap((params) => {
        this.productId = params['id'];
      }),
      switchMap((id) => this.productService.getProductByCode(this.productId)),
      shareReplay(1),
      tap(() => {
        window.scrollTo(0, 0);
      })
    );

    this.similarProducts$ = this.product$.pipe(
      map((product: any) => {
        const tags = product.tags.join(' ');
        const features = product.features.join(' ');
        return removeSpecialChars(tags) + ' ' + removeSpecialChars(features);
      }),
      switchMap((tags: any) => {
        return this.productService.searchProducts(tags).pipe(
          map((products: any) => {
            console.log(this.productId);
            return products.filter((p: any) => p.id != this.productId);
          })
        );
      })
    );
  }
  selectVariant(variant: any) {
    console.log('Variant selected', variant);
  }
  onAddToCart() {
    console.log('Add to cart clicked');
  }

  onChangeItem(index: number) {
    this.activeItem = index;
  }
}
