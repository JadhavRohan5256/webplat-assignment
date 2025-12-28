import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTitleService } from '../../shared/services/page-title.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DashboardService } from 'src/app/shared/services/dashboard.service';
import { User } from 'src/app/shared/models/dashboard.model';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    pageTitle$!: Observable<string>;
    userInfo: User | null = null;

    get isDashboard$(): Observable<boolean> {
        return this.pageTitle$.pipe(
            map(title => title === 'Dashboard')
        );
    }

    constructor(
        private pageTitleService: PageTitleService,
        private dashboardService: DashboardService
    ) { }

    ngOnInit() {
        this.pageTitle$ = this.pageTitleService.titleSubject.asObservable();
        this.getProfileDetails();
    }

    private getProfileDetails(): void {
        this.dashboardService.getProfile().subscribe({
            next: (response: User) => {
                this.userInfo = response;
            },
            error: (error) => {
                console.error('Error fetching profile details:', error);
            }
        });
    }

}
