import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/dashboard.model';

@Injectable({
    providedIn: 'root'
})
export class DashboardService {
    apiUrl = environment.apiUrl;
    constructor(
        private httpClient: HttpClient
    ) { }

    getProfile(): Observable<User> {
        return this.httpClient.get<User>(`${this.apiUrl}/auth/me`).pipe(shareReplay(1));
    }
}
