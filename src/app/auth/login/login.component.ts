import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ValidationErrorComponent } from '../../shared/components/validation-error/validation-error.component';
import { AuthService } from '../../shared/services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AppState } from 'src/app/store';
import { Store } from '@ngrx/store';
import { login } from 'src/app/store/auth/auth.actions';
import { Observable } from 'rxjs';
import { selectAuthStatus } from 'src/app/store/auth/auth.selectors';
import { LoaderComponent } from 'src/app/shared/components/loader/loader.component';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, ValidationErrorComponent, HttpClientModule, LoaderComponent],
    providers: [AuthService, LocalStorageService]
})
export class LoginComponent implements OnInit {
    loginForm!: FormGroup;
    apiStatus$: Observable<'pending' | 'loading' | 'success' | 'error'>;

    constructor(
        private formBuilder: FormBuilder,
        private storageService: LocalStorageService,
        private router: Router,
        private messageService: MessageService,
        private store: Store<AppState>
    ) {
        this.apiStatus$ = this.store.select(selectAuthStatus);
    }

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
        this.loginForm.markAllAsTouched();
        if (this.loginForm.invalid) {
            this.messageService.add({
                severity: 'error',
                summary: 'Invalid Input',
                detail: 'Please fill all required fields',
                life: 3000
            });
            return;
        }

        const { username, password } = this.loginForm.value;
        this.store.dispatch(login({ username, password }));
    }
}
