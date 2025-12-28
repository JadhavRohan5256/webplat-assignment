import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ProductsService } from '../../shared/services/products.service';
import * as ProductsActions from './products.actions';

@Injectable()
export class ProductsEffects {

    loadProducts$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ProductsActions.loadProducts),
            switchMap(() =>
                this.productsService.getAllProducts().pipe(
                    map(products => ProductsActions.loadProductsSuccess({ products })),
                    catchError(error => of(ProductsActions.loadProductsFailure({ error: error.message || 'Failed to load products' })))
                )
            )
        )
    );

    constructor(
        private actions$: Actions,
        private productsService: ProductsService
    ) { }
}
