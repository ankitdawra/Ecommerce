import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {
  FooterComponent,
  // HeaderComponent,
  SearchComponent,
  NavbarComponent,
  NavbarItemComponent,
  PopoverComponent,
} from './components';
import { SearchService, HttpService } from './services';

@NgModule({
  declarations: [
    PopoverComponent,
    FooterComponent,
    SearchComponent,
    NavbarComponent,
    NavbarItemComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule, HttpClientModule],
  providers: [SearchService, HttpService],
  exports: [
    FooterComponent,
    NavbarComponent,
    SearchComponent,
    PopoverComponent,
  ],
})
export class CoreModule {}
