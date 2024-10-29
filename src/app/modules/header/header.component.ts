import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  loginPopup = false;
  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {}

  toggleLoginPopup(e: Event): void {
    e.stopPropagation();
    this.loginPopup = !this.loginPopup;
  }

  hidePopup(): void {
    this.loginPopup = false;
  }

  hey(): void {
    console.log('hey');
  }
}
