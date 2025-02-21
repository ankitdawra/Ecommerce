import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { login, register } from '../../user';
import { Store } from '@ngrx/store';

type AuthMode = 'login' | 'register';
enum Modes {
  login = 'login',
  register = 'register',
}
@Component({
  selector: 'login-popup',
  templateUrl: './login-popup.component.html',
})
export class LoginPopupComponent implements OnInit {
  loginForm: FormGroup;
  registerForm: FormGroup;
  mode: AuthMode = Modes.login;
  Modes = Modes;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });

    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
    });
  }

  onSubmit(mode: AuthMode): void {
    if (mode === Modes.login) {
      if (this.loginForm.valid) {
        console.log(this.loginForm.value);
        this.store.dispatch(login({ data: this.loginForm.value }));
      }
    } else {
      if (this.registerForm.valid) {
        if (
          this.registerForm.value.password !==
          this.registerForm.value.confirmPassword
        ) {
          return alert('Password and confirm password should be same');
        }
        console.log(this.registerForm.value);
        const registerDto = {
          email: this.registerForm.value.email,
          password: this.registerForm.value.password,
          name: this.registerForm.value.name,
        };
        this.store.dispatch(register({ data: registerDto }));
      }
    }
  }

  updateMode(mode: AuthMode): void {
    this.mode = mode;
  }
}
