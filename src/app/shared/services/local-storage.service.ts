import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {

    constructor() { }

    setItem(key: string, value: unknown): void {
        const serializedValue = JSON.stringify(value);
        localStorage.setItem(key, serializedValue);
    }

    getItem<T>(key: string): T | null {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    }

    removeItem(key: string): void {
        localStorage.removeItem(key);
    }

    clear(): void {
        localStorage.clear();
    }

    hasItem(key: string): boolean {
        return localStorage.getItem(key) !== null;
    }
}
