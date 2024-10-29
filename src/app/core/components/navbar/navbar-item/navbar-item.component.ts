import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
} from '@angular/core';
import { NavItem } from '../../../model';

@Component({
  selector: 'navbar-item',
  templateUrl: './navbar-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarItemComponent implements OnChanges {
  @Input() item: NavItem | null = null;
  @Input() activeItem?: NavItem | null = null;

  ngOnChanges(): void {
    console.log(this.activeItem);
  }
}
