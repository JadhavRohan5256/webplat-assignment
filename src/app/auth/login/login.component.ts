import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ValidationErrorComponent } from '../../shared/components/validation-error/validation-error.component';
import { AuthService } from '../../shared/services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginResponse } from 'src/app/shared/models/auth.model';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, ValidationErrorComponent, HttpClientModule],
    providers: [AuthService, LocalStorageService]
})
export class LoginComponent implements OnInit {
    loginForm!: FormGroup;
    isLoading = false;

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private storageService: LocalStorageService,
        private router: Router
    ) { }

    ngOnInit(): void {
        if (this.storageService.getItem<string>('token')) {
            this.router.navigate(['/dashboard']);
        }

        this.initializeLoginFormGroup();
    }

    private initializeLoginFormGroup(): void {
        this.loginForm = this.formBuilder.group({
            username: ['', [Validators.required]],
            password: ['', [Validators.required]],
            rememberMe: false
        })
    }

    onLogin(): void {
        if (this.loginForm.invalid) {
            this.loginForm.markAllAsTouched();
            return;
        }

        this.isLoading = true;
        const { username, password } = this.loginForm.value;

        this.authService.login(username, password).subscribe({
            next: (response: LoginResponse) => {
                this.isLoading = false;
                this.storageService.setItem('token', response.accessToken);
                this.storageService.setItem('refreshToken', response.refreshToken);
                this.router.navigate(['/dashboard']);
            },
            error: (error) => {
                this.isLoading = false;
                console.error('Login failed:', error);
            }
        });
    }
}
