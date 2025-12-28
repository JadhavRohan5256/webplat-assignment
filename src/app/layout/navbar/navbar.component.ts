import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTitleService } from '../../shared/services/page-title.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/shared/models/dashboard.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { selectDashboardStatus, selectDashboardUser } from 'src/app/store/dashboard/dashboard.selectors';
import { LoaderComponent } from 'src/app/shared/components/loader/loader.component';
import { loadDashboardProfile } from 'src/app/store/dashboard/dashboard.actions';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [CommonModule, LoaderComponent],
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    pageTitle$!: Observable<string>;
    userInfo$: Observable<User | null>;
    apiStatus$: Observable<'pending' | 'loading' | 'success' | 'error'>;

    get isDashboard$(): Observable<boolean> {
        return this.pageTitle$.pipe(
            map(title => title === 'Dashboard')
        );
    }

    constructor(
        private pageTitleService: PageTitleService,
        private store: Store<AppState>
    ) {
        this.userInfo$ = this.store.select(selectDashboardUser);
        this.apiStatus$ = this.store.select(selectDashboardStatus);
    }


    ngOnInit() {
        this.pageTitle$ = this.pageTitleService.titleSubject.asObservable();
        this.store.dispatch(loadDashboardProfile());
    }

}
