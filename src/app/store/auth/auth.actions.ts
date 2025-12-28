import { createAction, props } from '@ngrx/store';
import { LoginResponse } from '../../shared/models/auth.model';

export const login = createAction(
    '[Auth] Login',
    props<{ username: string; password: string }>()
);

export const loginSuccess = createAction(
    '[Auth] Login Success',
    props<{ response: LoginResponse }>()
);

export const loginFailure = createAction(
    '[Auth] Login Failure',
    props<{ error: string }>()
);

export const logout = createAction('[Auth] Logout');
export const logoutSuccess = createAction('[Auth] Logout Success');

export const setAuthState = createAction(
    '[Auth] Set Auth State',
    props<{ accessToken: string; refreshToken: string }>()
);
