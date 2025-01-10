import { Injectable } from '@angular/core';
import { UserDTO } from '@app/core/app.model';
import { HttpService } from '@app/core/services';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private httpService: HttpService) {}
  login(data: UserDTO) {
    return this.httpService.post('/auth/login', data);
  }
}
