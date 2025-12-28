import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store';
import { logout } from '../../store/auth/auth.actions';
import { ModalService } from '../../shared/services/modal.service';
import { LogoutPopupComponent } from '../../shared/components/logout-popup/logout-popup.component';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
    menuItems = [
        { label: 'Dashboard', link: '/dashboard' },
        { label: 'User Page', link: '/users' },
        { label: 'Product Page', link: '/products' }
    ];

    bottomItems = [
        { label: 'Setting', icon: 'pi pi-cog', action: () => { } },
        { label: 'Help', icon: 'pi pi-question-circle', action: () => { } },
        { label: 'Logout', icon: 'pi pi-sign-out', action: () => this.onLogoutClick() }
    ];

    constructor(
        private store: Store<AppState>,
        private modalService: ModalService
    ) { }

    onLogoutClick(): void {
        const componentRef = this.modalService.open(LogoutPopupComponent);
        if (componentRef) {
            componentRef.instance.confirm.subscribe(() => {
                this.store.dispatch(logout());
                this.modalService.close();
            });
            componentRef.instance.cancel.subscribe(() => {
                this.modalService.close();
            });
        }
    }
}
