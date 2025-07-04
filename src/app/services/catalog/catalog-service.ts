import { computed, inject, Injectable, signal, } from '@angular/core';
import { Product } from '../../components/product';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  private httpClient = inject(HttpClient);
  private _products = signal<Product[]>([]);
  products = this._products.asReadonly();
  hasProductsInStock = computed<boolean>(() =>
    this.products().some((product) => product.stock > 0)
  );
  decreaseStock(productId: string) {
      this._products.update((products) =>
      products.map((product) => {
        if (productId === product.id) {
          return { ...product, stock: product.stock - 1 };
        }
        return product;
      })
    );
  }

  fetchProducts(): Observable<Product[]>
  { 
    return this.httpClient
    .get<Product[]>('http://localhost:8080/api/products')
    .pipe(
      tap(products => this._products.set(products) )
    );
  }
}
