import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UsersState } from './users.state';

export const selectUsersState = createFeatureSelector<UsersState>('users');

export const selectAllUsers = createSelector(
    selectUsersState,
    (state: UsersState) => state.users
);

export const selectSelectedUser = createSelector(
    selectUsersState,
    (state: UsersState) => state.selectedUser
);

export const selectUsersStatus = createSelector(
    selectUsersState,
    (state: UsersState) => state.status
);

export const selectUsersError = createSelector(
    selectUsersState,
    (state: UsersState) => state.error
);
