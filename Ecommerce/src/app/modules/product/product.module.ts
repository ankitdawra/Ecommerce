import { NgModule } from '@angular/core';
import { ProductService } from './services';
import { ProductGridComponent } from './product-grid';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProductGridComponent],
  imports: [CommonModule, RouterModule],
  providers: [ProductService],
  exports: [ProductGridComponent],
})
export class ProductModule {}
