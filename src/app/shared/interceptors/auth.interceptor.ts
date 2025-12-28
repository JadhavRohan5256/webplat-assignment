import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { LocalStorageService } from '../services/local-storage.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private storageService: LocalStorageService,
        private router: Router,
        private messageService: MessageService
    ) { }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const token = this.storageService.getItem<string>('token');
        let newRequest: HttpRequest<unknown> = request;

        if (token) {
            newRequest = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
        }

        return next.handle(newRequest).pipe(
            catchError(error => {
                if (error.status === 401) {
                    this.storageService.removeItem('token');
                    this.router.navigate(['/login']);
                }

                if (error.status === 0) {
                    this.messageService.add({
                        severity: 'error',
                        summary: 'Network Error',
                        detail: 'Please check your internet connection.',
                        life: 3000
                    });
                }


                if (error.status >= 400 && error.status < 600) {
                    const message = error.error?.message || error.error?.error || 'Something went wrong. Please try again.';

                    this.messageService.add({
                        severity: 'error',
                        summary: 'Error',
                        detail: message,
                        life: 3000
                    });
                }

                return throwError(() => error);
            })
        );
    }
}
