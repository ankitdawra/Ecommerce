import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from '../../services';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-seo',
  templateUrl: './seo.component.html',
})
export class SeoComponent implements OnInit {
  seoData$: Observable<any>;
  isEmpty: boolean;
  constructor(private route: ActivatedRoute, private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoData$ = this.seoService.getSeoData().pipe(
      tap((seoData) => {
        this.isEmpty = Object.entries(seoData).length === 0;
      })
    );
  }
}
