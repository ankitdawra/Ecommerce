import { createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';

const initialState = {
  currentUser: null,
  loginProcess: {
    error: null,
    registerSuccess: false,
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
      registerSuccess: false,
    },
  })),
  on(UserActions.loginSuccess, () => ({
    ...initialState,
    loginProcess: {
      error: null,
      registerSuccess: false,
    },
  })),
  on(UserActions.getCurrentUser, (state, payload) => {
    return {
      ...state,
    };
  }),
  on(UserActions.getCurrentUserFail, (state, payload) => {
    return {
      ...state,
      currentUser: null,
      loginProcess: {
        error: payload.error,
        registerSuccess: false,
      },
    };
  }),
  on(UserActions.registerSuccess, (state, payload) => {
    return {
      ...state,
      loginProcess: {
        error: null,
        registerSuccess: true,
      },
    };
  })
);
