import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ReadMoreComponent } from '../../shared/components/read-more/read-more.component';
import { PageTitleService } from 'src/app/shared/services/page-title.service';
import { Product } from 'src/app/shared/models/products.model';
import { AppState } from 'src/app/store';
import { loadProducts } from 'src/app/store/products/products.actions';
import { selectAllProducts, selectProductsStatus } from 'src/app/store/products/products.selectors';
import { LoaderComponent } from 'src/app/shared/components/loader/loader.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  standalone: true,
  imports: [CommonModule, ReadMoreComponent, LoaderComponent],
})
export class ProductsComponent implements OnInit {
  products$: Observable<Product[]>;
  apiStatus$: Observable<'pending' | 'loading' | 'success' | 'error'>;

  constructor(
    private pageTitleService: PageTitleService,
    private store: Store<AppState>
  ) {
    this.products$ = this.store.select(selectAllProducts);
    this.apiStatus$ = this.store.select(selectProductsStatus);
  }

  ngOnInit() {
    this.pageTitleService.setTitle('Products');
    this.store.dispatch(loadProducts());
  }

  trackById(index: number, item: Product): number {
    return item.id;
  }
}
