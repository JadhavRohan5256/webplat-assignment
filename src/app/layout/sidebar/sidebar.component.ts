import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
    menuItems = [
        { label: 'Dashboard', link: '/dashboard', active: true },
        { label: 'User Page', link: '/users', active: false },
        { label: 'Product Page', link: '/products', active: false }
    ];

    bottomItems = [
        { label: 'Setting', icon: 'pi pi-cog' },
        { label: 'Help', icon: 'pi pi-question-circle' },
        { label: 'Logout', icon: 'pi pi-sign-out' }
    ];
}
