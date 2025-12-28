import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { LocalStorageService } from '../../shared/services/local-storage.service';
import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {

    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.login),
            switchMap(({ username, password }) =>
                this.authService.login(username, password).pipe(
                    map(response => AuthActions.loginSuccess({ response })),
                    catchError(error => of(AuthActions.loginFailure({ error: error.message || 'Login failed' })))
                )
            )
        )
    );

    loginSuccess$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.loginSuccess),
            tap(({ response }) => {
                this.storageService.setItem('token', response.accessToken);
                this.router.navigate(['/dashboard']);
            })
        ),
        { dispatch: false }
    );

    logout$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.logout),
            tap(() => {
                this.storageService.removeItem('token');
                this.router.navigate(['/login']);
            }),
            map(() => AuthActions.logoutSuccess())
        )
    );

    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private storageService: LocalStorageService,
        private router: Router
    ) { }
}
