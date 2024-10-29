import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { CoreModule } from 'src/app/core';
import { LoginModule } from '../login/login.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, CoreModule, LoginModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
