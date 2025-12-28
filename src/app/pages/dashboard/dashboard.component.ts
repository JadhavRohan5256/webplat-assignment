import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PageTitleService } from 'src/app/shared/services/page-title.service';
import { User } from 'src/app/shared/models/dashboard.model';
import { AppState } from 'src/app/store';
import { selectDashboardUser, selectDashboardStatus } from 'src/app/store/dashboard/dashboard.selectors';
import { LoaderComponent } from 'src/app/shared/components/loader/loader.component';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [CommonModule, LoaderComponent],
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    userInfo$: Observable<User | null>;
    apiStatus$: Observable<'pending' | 'loading' | 'success' | 'error'>;

    constructor(
        private pageTitleService: PageTitleService,
        private store: Store<AppState>
    ) {
        this.userInfo$ = this.store.select(selectDashboardUser);
        this.apiStatus$ = this.store.select(selectDashboardStatus);
    }

    ngOnInit() {
        this.pageTitleService.setTitle('Dashboard');
    }
}
