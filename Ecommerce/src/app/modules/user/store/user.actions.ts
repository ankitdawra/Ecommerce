import { createAction, props } from '@ngrx/store';

const getCurrentUser = createAction('[User] Get Current User');
const getCurrentUserSuccess = createAction(
  '[User] Get Current User Success',
  props<any>()
);
const getCurrentUserFail = createAction(
  '[User] Get Current User Fail',
  props<any>()
);

const login = createAction('[User] Login', props<any>());
const loginSuccess = createAction('[User] Login Success', props<any>());
const loginFail = createAction('[User] Login Fail', props<any>());

const temp = createAction('[User] Temp', props<any>());

const register = createAction('[User] Register', props<any>());
const registerSuccess = createAction('[User] Register Success');
const registerFail = createAction('[User] Register Fail', props<any>());

const logout = createAction('[User] Logout');

export {
  getCurrentUser,
  getCurrentUserSuccess,
  getCurrentUserFail,
  login,
  loginSuccess,
  loginFail,
  temp,
  register,
  registerSuccess,
  registerFail,
  logout,
};
