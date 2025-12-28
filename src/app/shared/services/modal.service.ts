import { Injectable, Type, ViewContainerRef } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ModalService {
    private viewContainerRef!: ViewContainerRef;

    setRootViewContainerRef(vcr: ViewContainerRef) {
        this.viewContainerRef = vcr;
    }

    open<T>(component: Type<T>) {
        if (!this.viewContainerRef) {
            console.error('ViewContainerRef not set in ModalService');
            return null;
        }
        this.viewContainerRef.clear();
        return this.viewContainerRef.createComponent(component);
    }

    close() {
        if (this.viewContainerRef) {
            this.viewContainerRef.clear();
        }
    }
}
