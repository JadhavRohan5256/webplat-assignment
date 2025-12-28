import { Product } from '../../shared/models/products.model';

export interface ProductsState {
    products: Product[];
    selectedProduct: Product | null;
    status: 'pending' | 'loading' | 'success' | 'error';
    error: string | null;
}

export const initialProductsState: ProductsState = {
    products: [],
    selectedProduct: null,
    status: 'pending',
    error: null
};
