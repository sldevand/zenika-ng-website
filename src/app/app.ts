import { Component, inject, OnInit } from '@angular/core';
import { Product } from './components/product';
import { ProductCard } from './components/product-card/product-card';
import { CatalogService } from './services/catalog/catalog-service';
import { BasketService } from './services/basket/basket-service';
import { Menu } from './components/menu/menu';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [ProductCard, Menu, CurrencyPipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
})
export class App implements OnInit{
  private catalogService = inject(CatalogService);
  private basketService = inject(BasketService);
  hasProductsInStock = this.catalogService.hasProductsInStock;
  products = this.catalogService.products;
  total = this.basketService.total;

  ngOnInit(): void {
    this.catalogService.fetchProducts().subscribe();
    this.basketService.fetchBasket().subscribe()
  }

  ajouterAuPanier(produit: Product): void {
    this.basketService.addItem(produit.id).subscribe(
      {
        next: (item) => this.catalogService.decreaseStock(item.id),
        error: (error) => console.error(error)
      }
    );
    this.basketService.addItem(produit.id).subscribe(
      {
        next: (item) => this.catalogService.decreaseStock(item.id),
        error: (error) => console.error(error)
      }
    );
  }
}
