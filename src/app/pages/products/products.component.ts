import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReadMoreComponent } from '../../shared/components/read-more/read-more.component';
import { PageTitleService } from 'src/app/shared/services/page-title.service';
import { Product } from 'src/app/shared/models/products.model';
import { ProductsService } from 'src/app/shared/services/products.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  standalone: true,
  imports: [CommonModule, ReadMoreComponent, HttpClientModule],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];


  constructor(
    private pageTitleService: PageTitleService,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.pageTitleService.setTitle('Products');
    this.getAllProducts();
  }

  private getAllProducts(): void {
    this.productsService.getAllProducts().subscribe({
      next: (response: Product[]) => {
        this.products = response;
      },
      error: (error) => {
        console.error('Error fetching products:', error);
      }
    });
  }
}
