import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services';

@Component({
  selector: 'login-popup',
  templateUrl: './login-popup.component.html',
})
export class LoginPopupComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.loginService.login(this.loginForm.value).subscribe((res) => {
        console.log(res);
      });
    }
  }
}
