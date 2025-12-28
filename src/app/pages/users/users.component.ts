import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTitleService } from 'src/app/shared/services/page-title.service';
import { UsersService } from 'src/app/shared/services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { User } from 'src/app/shared/models/dashboard.model';

@Component({
    selector: 'app-users',
    standalone: true,
    imports: [CommonModule, HttpClientModule],
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
    users: User[] = [];

    constructor(
        private pageTitleService: PageTitleService,
        private usersService: UsersService
    ) { }

    ngOnInit() {
        this.pageTitleService.setTitle('Users');
        this.getAllUsers();
    }

    private getAllUsers(): void {
        this.usersService.getAllUsers().subscribe({
            next: (response: User[]) => {
                this.users = response;
            },
            error: (error) => {
                console.error('Error fetching users:', error);
            }
        });
    }
}
