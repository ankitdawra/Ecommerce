import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({ providedIn: 'root' })
export class SearchService {
  constructor(private http: HttpService) {}

  searchProducts(key: string): Observable<any> {
    console.log('search service', key);
    return this.http.get('');
  }
}
