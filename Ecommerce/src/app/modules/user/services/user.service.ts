import { Injectable } from '@angular/core';
import { HttpService } from '@app/core/services';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpService: HttpService) {}

  getCurrentUser() {
    return this.httpService.get('/auth/profile');
  }

  login(data: any): Observable<any> {
    return this.httpService.post('/auth/login', data);
  }

  register(data: any): Observable<any> {
    // return of(true);
    return this.httpService.post('/auth/register', data);
  }
}
