import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl } from '@angular/forms';

@Component({
    selector: 'app-validation-error',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './validation-error.component.html',
    styleUrls: ['./validation-error.component.scss']
})
export class ValidationErrorComponent {
}
