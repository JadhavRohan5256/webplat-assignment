import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { UsersService } from '../../shared/services/users.service';
import * as UsersActions from './users.actions';

@Injectable()
export class UsersEffects {

    loadUsers$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UsersActions.loadUsers),
            switchMap(() =>
                this.usersService.getAllUsers().pipe(
                    map(users => UsersActions.loadUsersSuccess({ users })),
                    catchError(error => of(UsersActions.loadUsersFailure({ error: error.message || 'Failed to load users' })))
                )
            )
        )
    );

    constructor(
        private actions$: Actions,
        private usersService: UsersService
    ) { }
}
