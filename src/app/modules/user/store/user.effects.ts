import { Injectable } from '@angular/core';
import { Actions, act, createEffect, ofType } from '@ngrx/effects';
import { UserService } from '../services';
import * as UserActions from './user.actions';
import {
  Observable,
  catchError,
  map,
  mergeMap,
  noop,
  of,
  switchMap,
} from 'rxjs';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  getCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.getCurrentUser),
      mergeMap(() => {
        return this.userService.getCurrentUser().pipe(
          map((user) => {
            return UserActions.getCurrentUserSuccess({ user });
          }),
          catchError(({ error }) => {
            console.log(error);
            localStorage.removeItem('access_token');
            return of(UserActions.getCurrentUserFail({ error }));
          })
        );
      })
    )
  );

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.login),
      map((action) => action.data),
      mergeMap((user) => {
        return this.userService.login(user).pipe(
          map((user) => {
            if (user.access_token) {
              localStorage.setItem('access_token', user.access_token);
            }
            return UserActions.getCurrentUser();
          }),
          catchError(({ error }) => {
            localStorage.removeItem('access_token');
            return of(
              UserActions.loginFail({
                error: error?.message,
              })
            );
          })
        );
      })
    )
  );
}
