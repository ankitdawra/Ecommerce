import { Injectable } from '@angular/core';
import { Actions, Effect, act, createEffect, ofType } from '@ngrx/effects';
import { UserService } from '../services';
import * as UserActions from './user.actions';
import {
  EMPTY,
  Observable,
  catchError,
  from,
  map,
  merge,
  mergeMap,
  noop,
  of,
  switchMap,
  tap,
} from 'rxjs';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  getCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.getCurrentUser),
      switchMap(() => {
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
      switchMap((user) => {
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

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.register),
      map((action) => action.data),
      switchMap((user) => {
        return this.userService.register(user).pipe(
          map(() => UserActions.registerSuccess()),
          catchError(({ error }) => {
            return of(UserActions.registerFail({ error }));
          })
        );
      })
    )
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UserActions.logout),
        switchMap(() => {
          localStorage.removeItem('access_token');
          return of(UserActions.getCurrentUser());
        })
      )
    // { dispatch: false }
  );
}
