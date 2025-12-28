import { Component, ViewChild, ViewContainerRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { ModalService } from '../../shared/services/modal.service';

@Component({
    selector: 'app-layout',
    standalone: true,
    imports: [CommonModule, RouterModule, SidebarComponent, NavbarComponent],
    templateUrl: './app-layout.component.html',
    styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent implements AfterViewInit {
    @ViewChild('modalContainer', { read: ViewContainerRef }) modalContainer!: ViewContainerRef;

    constructor(private modalService: ModalService) { }

    ngAfterViewInit() {
        this.modalService.setRootViewContainerRef(this.modalContainer);
    }
}
