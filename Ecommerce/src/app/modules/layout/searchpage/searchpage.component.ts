import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../product/services';
import {
  Observable,
  distinctUntilChanged,
  finalize,
  of,
  switchMap,
} from 'rxjs';
import { PageComponent } from '../page';
import { SeoService } from '@app/core/services';

@Component({
  selector: 'search-page',
  templateUrl: './searchpage.component.html',
})
export class SearchPageComponent extends PageComponent {
  products$: Observable<any>;
  loader$: Observable<boolean> = of(true);
  searchQuery: string;

  constructor(
    protected activatedRoute: ActivatedRoute,
    private productService: ProductService,
    protected seoService: SeoService
  ) {
    super(activatedRoute, seoService);
  }

  ngOnInit(): void {
    super.ngOnInit();
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
