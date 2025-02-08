import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from '@app/core/services';

@Component({
  template: '',
})
export abstract class PageComponent implements OnInit {
  constructor(
    protected activatedRoute: ActivatedRoute,
    protected seoService: SeoService
  ) {}
  ngOnInit(): void {
    this.seoService.setSeoData(this.activatedRoute.snapshot.data);
  }
}
