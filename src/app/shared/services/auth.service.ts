import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginResponse } from '../models/auth.model';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private apiUrl = environment.apiUrl;

    constructor(
        private httpClient: HttpClient
    ) { }

    login(username: string, password: string): Observable<LoginResponse> {
        return this.httpClient.post<LoginResponse>(`${this.apiUrl}/auth/login`, { username, password });
    }
}
