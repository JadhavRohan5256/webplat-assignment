import { createAction, props } from '@ngrx/store';
import { User } from '../../shared/models/dashboard.model';

export const loadDashboardProfile = createAction('[Dashboard] Load Profile');

export const loadDashboardProfileSuccess = createAction(
    '[Dashboard] Load Profile Success',
    props<{ user: User }>()
);

export const loadDashboardProfileFailure = createAction(
    '[Dashboard] Load Profile Failure',
    props<{ error: string }>()
);

export const clearDashboardProfile = createAction('[Dashboard] Clear Profile');
