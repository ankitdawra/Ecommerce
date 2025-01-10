import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user.model';

export const userState = createFeatureSelector<UserState>('user');
export const currentUser = createSelector(
  userState,
  (state) => state.currentUser
);

export const loginProcess = createSelector(
  userState,
  (state) => state.loginProcess
);
