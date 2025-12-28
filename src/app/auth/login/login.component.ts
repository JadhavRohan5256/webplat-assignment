import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    rememberMe: boolean = false;

    constructor() { }

    ngOnInit(): void {
    }

    onLogin(): void {
        console.log('Login clicked');
    }

    onForgotPassword(): void {
        console.log('Forgot password clicked');
    }

    onSignUp(): void {
        console.log('Sign up clicked');
    }
}
