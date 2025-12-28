import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class LoaderComponent implements OnInit {
  @Input() size: number = 0;

  constructor() {

  }

  get modifiedSize(): { width: string, height: string, display: string } {
    return {
      'width': `${this.size}px`,
      'height': `${this.size}px`,
      'display': 'block'
    }
  }

  ngOnInit(): void {
  }
}
