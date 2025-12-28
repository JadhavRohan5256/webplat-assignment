import { createReducer, on } from '@ngrx/store';
import { UsersState, initialUsersState } from './users.state';
import * as UsersActions from './users.actions';

export const usersReducer = createReducer(
    initialUsersState,

    on(UsersActions.loadUsers, (state): UsersState => ({
        ...state,
        status: 'loading',
        error: null
    })),

    on(UsersActions.loadUsersSuccess, (state, { users }): UsersState => ({
        ...state,
        users,
        status: 'success',
        error: null
    })),

    on(UsersActions.loadUsersFailure, (state, { error }): UsersState => ({
        ...state,
        status: 'error',
        error
    })),

    on(UsersActions.selectUser, (state, { user }): UsersState => ({
        ...state,
        selectedUser: user
    })),

    on(UsersActions.clearSelectedUser, (state): UsersState => ({
        ...state,
        selectedUser: null
    }))
);
