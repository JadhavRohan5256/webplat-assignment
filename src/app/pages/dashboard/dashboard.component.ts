import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTitleService } from 'src/app/shared/services/page-title.service';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    userInfo = {
        name: 'TEST NAME',
        team: '6666666666',
        email: 'Test@gmail.com',
        salesPerson: 'Sales person name',
        contactNumber: '0000000000',
        avatarUrl: 'https://i.pravatar.cc/300?img=5'
    };

    constructor(
        private pageTitleService: PageTitleService
    ) { }

    ngOnInit() {
        this.pageTitleService.setTitle('Dashboard');
    }
}
