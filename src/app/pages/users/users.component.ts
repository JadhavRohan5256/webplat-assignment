import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTitleService } from 'src/app/shared/services/page-title.service';

@Component({
    selector: 'app-users',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
    users = [
        { id: 1, firstName: 'John', lastName: 'Deo', gender: 'Male', email: 'johndeo.gmail.com', phone: '9890989098', birthDate: '07/08/1999', image: 'assets/images/user.png' },
        { id: 2, firstName: 'John', lastName: 'Deo', gender: 'Male', email: 'johndeo.gmail.com', phone: '9890989098', birthDate: '07/08/1999', image: 'assets/images/user.png' },
        { id: 3, firstName: 'John', lastName: 'Deo', gender: 'Male', email: 'johndeo.gmail.com', phone: '9890989098', birthDate: '07/08/1999', image: 'assets/images/user.png' },
        { id: 4, firstName: 'John', lastName: 'Deo', gender: 'Male', email: 'johndeo.gmail.com', phone: '9890989098', birthDate: '07/08/1999', image: 'assets/images/user.png' },
        { id: 5, firstName: 'John', lastName: 'Deo', gender: 'Male', email: 'johndeo.gmail.com', phone: '9890989098', birthDate: '07/08/1999', image: 'assets/images/user.png' },
        { id: 6, firstName: 'John', lastName: 'Deo', gender: 'Male', email: 'johndeo.gmail.com', phone: '9890989098', birthDate: '07/08/1999', image: 'assets/images/user.png' },
        { id: 7, firstName: 'John', lastName: 'Deo', gender: 'Male', email: 'johndeo.gmail.com', phone: '9890989098', birthDate: '07/08/1999', image: 'assets/images/user.png' },
        { id: 8, firstName: 'John', lastName: 'Deo', gender: 'Male', email: 'johndeo.gmail.com', phone: '9890989098', birthDate: '07/08/1999', image: 'assets/images/user.png' }
    ];

    constructor(
        private pageTitleService: PageTitleService
    ) { }

    ngOnInit() {
        this.pageTitleService.setTitle('Users');
    }
}
