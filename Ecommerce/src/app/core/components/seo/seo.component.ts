import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from '../../services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-seo',
  templateUrl: './seo.component.html',
})
export class SeoComponent implements OnInit {
  seoData$: Observable<any>;
  constructor(private route: ActivatedRoute, private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoData$ = this.seoService.getSeoData();
  }
}
