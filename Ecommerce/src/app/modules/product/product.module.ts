import { NgModule } from '@angular/core';
import { ProductService } from './services';
import { ProductGridComponent } from './product-grid';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ProductGridComponent],
  imports: [CommonModule],
  providers: [ProductService],
  exports: [ProductGridComponent],
})
export class ProductModule {}
