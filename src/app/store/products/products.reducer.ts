import { createReducer, on } from '@ngrx/store';
import { ProductsState, initialProductsState } from './products.state';
import * as ProductsActions from './products.actions';

export const productsReducer = createReducer(
    initialProductsState,

    on(ProductsActions.loadProducts, (state): ProductsState => ({
        ...state,
        status: 'loading',
        error: null
    })),

    on(ProductsActions.loadProductsSuccess, (state, { products }): ProductsState => ({
        ...state,
        products,
        status: 'success',
        error: null
    })),

    on(ProductsActions.loadProductsFailure, (state, { error }): ProductsState => ({
        ...state,
        status: 'error',
        error
    })),

    on(ProductsActions.selectProduct, (state, { product }): ProductsState => ({
        ...state,
        selectedProduct: product
    })),

    on(ProductsActions.clearSelectedProduct, (state): ProductsState => ({
        ...state,
        selectedProduct: null
    }))
);
