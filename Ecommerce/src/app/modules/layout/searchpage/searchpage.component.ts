import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../product/services';
import {
  Observable,
  delay,
  distinctUntilChanged,
  finalize,
  of,
  switchMap,
  tap,
} from 'rxjs';
import { Product } from 'src/app/app.model';

@Component({
  selector: 'search-page',
  templateUrl: './searchpage.component.html',
})
export class SearchPageComponent implements OnInit {
  products$: Observable<any>;
  loader$: Observable<boolean> = of(true);
  searchQuery: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.products$ = this.activatedRoute.params.pipe(
      distinctUntilChanged(),
      switchMap((params) => {
        this.loader$ = of(true);
        return this.productService.searchProducts(params['id']).pipe(
          finalize(() => {
            this.searchQuery = params['id'];
            this.loader$ = of(false);
          })
        );
      })
    );
  }
}
