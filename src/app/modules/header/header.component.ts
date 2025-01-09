import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { currentUser, getCurrentUser } from '../user';
import { Store } from '@ngrx/store';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  loginPopup = false;
  currentUser$ = this.store.select(currentUser);
  constructor(private cd: ChangeDetectorRef, private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(getCurrentUser());
    this.currentUser$.subscribe((user) => {
      console.log(user);
    });
    // this.userService.getCurrentUser().subscribe((user) => {
    //   console.log(user);
    // });
  }

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
