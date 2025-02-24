import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from '../services';
import * as UserActions from './user.actions';
import { catchError, map, of, switchMap, tap } from 'rxjs';

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
            window.alert(error?.message);
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
          tap(() => {
            window.alert('Registration successful');
          }),
          map(() => UserActions.registerSuccess()),
          catchError(({ error }) => {
            window.alert(error?.message);
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
