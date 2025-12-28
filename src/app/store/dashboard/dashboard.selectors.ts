import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DashboardState } from './dashboard.state';

export const selectDashboardState = createFeatureSelector<DashboardState>('dashboard');

export const selectDashboardUser = createSelector(
    selectDashboardState,
    (state: DashboardState) => state.user
);

export const selectDashboardStatus = createSelector(
    selectDashboardState,
    (state: DashboardState) => state.status
);

export const selectDashboardError = createSelector(
    selectDashboardState,
    (state: DashboardState) => state.error
);
