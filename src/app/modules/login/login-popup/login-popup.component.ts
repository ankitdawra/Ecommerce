import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { login } from '../../user';
import { Store } from '@ngrx/store';

@Component({
  selector: 'login-popup',
  templateUrl: './login-popup.component.html',
})
export class LoginPopupComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.store.dispatch(login({ data: this.loginForm.value }));
      // this.userService.login(this.loginForm.value).subscribe((res: any) => {
      //   if (res.access_token) {
      //     localStorage.setItem('access_token', res.access_token);
      //   }
      // });
    }
  }
}
