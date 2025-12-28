import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductsState } from './products.state';

export const selectProductsState = createFeatureSelector<ProductsState>('products');

export const selectAllProducts = createSelector(
    selectProductsState,
    (state: ProductsState) => state.products
);

export const selectSelectedProduct = createSelector(
    selectProductsState,
    (state: ProductsState) => state.selectedProduct
);

export const selectProductsStatus = createSelector(
    selectProductsState,
    (state: ProductsState) => state.status
);

export const selectProductsError = createSelector(
    selectProductsState,
    (state: ProductsState) => state.error
);
