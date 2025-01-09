import { Component, Input } from '@angular/core';

@Component({
  selector: 'large-banner',
  templateUrl: './large-banner.component.html',
})
export class LargeBannerComponent {
  @Input() item: any;
}
