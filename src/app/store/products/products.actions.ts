import { createAction, props } from '@ngrx/store';
import { Product } from '../../shared/models/products.model';

export const loadProducts = createAction('[Products] Load Products');

export const loadProductsSuccess = createAction(
    '[Products] Load Products Success',
    props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
    '[Products] Load Products Failure',
    props<{ error: string }>()
);

export const selectProduct = createAction(
    '[Products] Select Product',
    props<{ product: Product }>()
);

export const clearSelectedProduct = createAction('[Products] Clear Selected Product');
