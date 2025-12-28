import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, shareReplay } from "rxjs";
import { environment } from "src/environments/environment";
import { Product, ProductsResponse } from "../models/products.model";

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    private apiUrl = environment.apiUrl;

    constructor(
        private httpClient: HttpClient
    ) { }

    getAllProducts(): Observable<Product[]> {
        return this.httpClient.get<ProductsResponse>(`${this.apiUrl}/products`).pipe(
            shareReplay(1),
            map((response: ProductsResponse) => response.products)
        );
    }
}