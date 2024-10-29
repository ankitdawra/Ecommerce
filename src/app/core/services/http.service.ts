import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(
    private httpClient: HttpClient,
    @Inject('API_URL') private apiUrl: string
  ) {}

  get(url: string) {
    // return this.httpClient.get(url);
    return this.httpClient.get(this.apiUrl + url);
  }

  post(url: string, data: any) {
    return this.httpClient.post(this.apiUrl + url, data);
  }
}
