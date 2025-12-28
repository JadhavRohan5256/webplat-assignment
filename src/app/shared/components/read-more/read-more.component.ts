import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-read-more',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './read-more.component.html',
    styleUrls: ['./read-more.component.scss']
})
export class ReadMoreComponent {
    @Input() text: string = '';
    @Input() limit: number = 60;

    isExpanded: boolean = false;

    get displayText(): string {
        if (!this.text) return '';
        if (this.text.length <= this.limit || this.isExpanded) {
            return this.text;
        }
        return this.text.slice(0, this.limit) + '...';
    }

    get shouldShowToggle(): boolean {
        return !!(this.text && this.text.length > this.limit);
    }

    toggle(): void {
        this.isExpanded = !this.isExpanded;
    }
}
