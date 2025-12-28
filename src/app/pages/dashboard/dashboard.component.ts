import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTitleService } from 'src/app/shared/services/page-title.service';
import { DashboardService } from 'src/app/shared/services/dashboard.service';
import { User } from 'src/app/shared/models/dashboard.model';
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [CommonModule, HttpClientModule],
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    providers: [DashboardService]
})
export class DashboardComponent implements OnInit {
    userInfo: User | null = null;

    constructor(
        private pageTitleService: PageTitleService,
        private dashboardService: DashboardService
    ) { }

    ngOnInit() {
        this.pageTitleService.setTitle('Dashboard');
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
