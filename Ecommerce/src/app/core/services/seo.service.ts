import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class SeoService {
  private seoData$ = new Subject<any>();
  constructor() {}

  setSeoData(data: any) {
    this.seoData$.next(data);
  }

  getSeoData() {
    return this.seoData$.asObservable();
  }
}
