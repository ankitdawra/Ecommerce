import { createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';

const initialState = {
  currentUser: null,
  loginProcess: {
    error: null,
  },
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.getCurrentUserSuccess, (state, payload) => ({
    ...state,
    currentUser: payload.user,
  })),
  on(UserActions.loginFail, (_, payload) => ({
    ...initialState,
    loginProcess: {
      error: payload.error,
    },
  })),
  on(UserActions.loginSuccess, () => ({
    ...initialState,
    loginProcess: {
      error: null,
    },
  })),
  on(UserActions.getCurrentUser, (state, payload) => {
    console.log('temp called');
    return {
      ...state,
    };
  })
);
