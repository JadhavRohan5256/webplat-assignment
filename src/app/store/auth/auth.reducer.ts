import { createReducer, on } from '@ngrx/store';
import { AuthState, initialAuthState } from './auth.state';
import * as AuthActions from './auth.actions';

export const authReducer = createReducer(
    initialAuthState,

    on(AuthActions.login, (state): AuthState => ({
        ...state,
        status: 'loading',
        error: null
    })),

    on(AuthActions.loginSuccess, (state, { response }): AuthState => ({
        ...state,
        user: response,
        status: 'success',
        error: null
    })),

    on(AuthActions.loginFailure, (state, { error }): AuthState => ({
        ...state,
        status: 'error',
        error
    })),

    on(AuthActions.logout, AuthActions.logoutSuccess, (): AuthState => ({
        ...initialAuthState
    })),

    on(AuthActions.setAuthState, (state): AuthState => ({
        ...state,
        status: 'success',
        error: null,
        isAuthenticated: true
    }))
);
