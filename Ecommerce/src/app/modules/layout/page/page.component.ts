import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from '@app/core/services';
import { distinctUntilChanged, tap } from 'rxjs';

@Component({
  template: '',
})
export abstract class PageComponent implements OnInit {
  constructor(
    protected activatedRoute: ActivatedRoute,
    protected seoService: SeoService
  ) {}
  ngOnInit(): void {
    this.activatedRoute.url
      .pipe(
        distinctUntilChanged((prev, curr) => {
          console.log('prev', prev);
          console.log('curr', curr);
          return prev.toString() !== curr.toString();
        }),
        tap(() => {
          console.log('PageComponent initss');
          this.seoService.setSeoData(this.activatedRoute.snapshot.data);
        })
      )
      .subscribe();
  }
}
