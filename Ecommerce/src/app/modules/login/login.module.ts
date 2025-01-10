import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPopupComponent } from './login-popup/login-popup.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './services';

@NgModule({
  declarations: [LoginPopupComponent],
  imports: [CommonModule, BrowserModule, ReactiveFormsModule],
  exports: [LoginPopupComponent],
  providers: [LoginService],
})
export class LoginModule {}
