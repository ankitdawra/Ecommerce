import { Component, Input } from '@angular/core';

@Component({
  selector: 'product-grid',
  templateUrl: './product-grid.component.html',
})
export class ProductGridComponent {
  @Input() product: any;
  constructor() {}
}
