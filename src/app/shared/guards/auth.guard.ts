import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private storageService: LocalStorageService
    ) { }

    canActivate(): boolean {
        const token = this.storageService.getItem<string>('token');

        if (token) {
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }
}
