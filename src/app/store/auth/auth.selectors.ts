import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.state';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectAuthUser = createSelector(
    selectAuthState,
    (state: AuthState) => state.user
);

export const selectIsAuthenticated = createSelector(
    selectAuthState,
    (state: AuthState) => state.isAuthenticated
);



export const selectAuthStatus = createSelector(
    selectAuthState,
    (state: AuthState) => state.status
);

export const selectAuthError = createSelector(
    selectAuthState,
    (state: AuthState) => state.error
);
