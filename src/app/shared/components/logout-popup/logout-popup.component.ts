import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-logout-popup',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './logout-popup.component.html',
    styleUrls: ['./logout-popup.component.scss']
})
export class LogoutPopupComponent {
    @Output() confirm = new EventEmitter<void>();
    @Output() cancel = new EventEmitter<void>();

    onConfirm(): void {
        this.confirm.emit();
    }

    onCancel(): void {
        this.cancel.emit();
    }
}
