import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, filter, map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { DashboardService } from '../../shared/services/dashboard.service';
import * as DashboardActions from './dashboard.actions';
import { AppState } from '..';
import { Store } from '@ngrx/store';
import { selectDashboardStatus, selectDashboardUser } from './dashboard.selectors';

@Injectable()
export class DashboardEffects {

    loadDashboardProfile$ = createEffect(() =>
        this.actions$.pipe(
            ofType(DashboardActions.loadDashboardProfile),
            switchMap(() =>
                this.dashboardService.getProfile().pipe(
                    map(user => DashboardActions.loadDashboardProfileSuccess({ user })),
                    catchError(error => of(DashboardActions.loadDashboardProfileFailure({ error: error.message || 'Failed to load profile' })))
                )
            )
        )
    );

    constructor(
        private actions$: Actions,
        private dashboardService: DashboardService,
        private store: Store<AppState>
    ) { }
}
