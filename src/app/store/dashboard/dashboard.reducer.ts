import { createReducer, on } from '@ngrx/store';
import { DashboardState, initialDashboardState } from './dashboard.state';
import * as DashboardActions from './dashboard.actions';

export const dashboardReducer = createReducer(
    initialDashboardState,

    on(DashboardActions.loadDashboardProfile, (state): DashboardState => ({
        ...state,
        status: 'loading',
        error: null
    })),

    on(DashboardActions.loadDashboardProfileSuccess, (state, { user }): DashboardState => ({
        ...state,
        user,
        status: 'success',
        error: null
    })),

    on(DashboardActions.loadDashboardProfileFailure, (state, { error }): DashboardState => ({
        ...state,
        status: 'error',
        error
    })),

    on(DashboardActions.clearDashboardProfile, (): DashboardState => ({
        ...initialDashboardState
    }))
);
