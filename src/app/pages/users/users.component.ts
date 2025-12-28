import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PageTitleService } from 'src/app/shared/services/page-title.service';
import { User } from 'src/app/shared/models/dashboard.model';
import { AppState } from 'src/app/store';
import { loadUsers } from 'src/app/store/users/users.actions';
import { selectAllUsers, selectUsersStatus } from 'src/app/store/users/users.selectors';
import { LoaderComponent } from 'src/app/shared/components/loader/loader.component';

@Component({
    selector: 'app-users',
    standalone: true,
    imports: [CommonModule, LoaderComponent],
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
    users$: Observable<User[]>;
    apiStatus$: Observable<'pending' | 'loading' | 'success' | 'error'>;

    constructor(
        private pageTitleService: PageTitleService,
        private store: Store<AppState>
    ) {
        this.users$ = this.store.select(selectAllUsers);
        this.apiStatus$ = this.store.select(selectUsersStatus);
    }

    ngOnInit() {
        this.pageTitleService.setTitle('Users');
        this.store.dispatch(loadUsers());
    }
}
