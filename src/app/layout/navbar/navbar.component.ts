import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTitleService } from '../../shared/services/page-title.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    pageTitle$!: Observable<string>;

    constructor(
        private pageTitleService: PageTitleService
    ) { }

    ngOnInit() {
        this.pageTitle$ = this.pageTitleService.titleSubject.asObservable();
    }

    get isDashboard$(): Observable<boolean> {
        return this.pageTitle$.pipe(
            map(title => title === 'Dashboard')
        );
    }
}
