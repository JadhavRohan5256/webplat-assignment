import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UsersResponse } from "../models/users.model";
import { map, Observable, shareReplay } from "rxjs";
import { environment } from "src/environments/environment";
import { User } from "../models/dashboard.model";

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    private apiUrl = environment.apiUrl;

    constructor(
        private httpClient: HttpClient
    ) { }

    getAllUsers(): Observable<User[]> {
        return this.httpClient.get<UsersResponse>(`${this.apiUrl}/users`).pipe(
            shareReplay(1),
            map((item: UsersResponse) => item.users)
        );
    }
}