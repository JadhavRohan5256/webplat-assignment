import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PageTitleService {
    titleSubject = new BehaviorSubject<string>('Dashboard');

    setTitle(title: string) {
        this.titleSubject.next(title);
    }
}
