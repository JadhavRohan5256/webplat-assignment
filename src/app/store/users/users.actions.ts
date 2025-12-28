import { createAction, props } from '@ngrx/store';
import { User } from '../../shared/models/dashboard.model';

export const loadUsers = createAction('[Users] Load Users');

export const loadUsersSuccess = createAction(
    '[Users] Load Users Success',
    props<{ users: User[] }>()
);

export const loadUsersFailure = createAction(
    '[Users] Load Users Failure',
    props<{ error: string }>()
);

export const selectUser = createAction(
    '[Users] Select User',
    props<{ user: User }>()
);

export const clearSelectedUser = createAction('[Users] Clear Selected User');
