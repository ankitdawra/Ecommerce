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
  LargeBannerComponent,
  CarouselComponent,
  ButtonComponent,
  SeoComponent,
} from './components';
import { HttpService, SeoService } from './services';

@NgModule({
  declarations: [
    PopoverComponent,
    FooterComponent,
    SearchComponent,
    NavbarComponent,
    NavbarItemComponent,
    LargeBannerComponent,
    CarouselComponent,
    ButtonComponent,
    SeoComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule, HttpClientModule],
  providers: [HttpService, SeoService],
  exports: [
    FooterComponent,
    NavbarComponent,
    SearchComponent,
    PopoverComponent,
    LargeBannerComponent,
    CarouselComponent,
    ButtonComponent,
    SeoComponent,
  ],
})
export class CoreModule {}
