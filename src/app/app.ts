import { Component, inject } from '@angular/core';
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
export class App {
  private catalogService = inject(CatalogService);
  private basketService = inject(BasketService);
  hasProductsInStock = this.catalogService.hasProductsInStock;
  products = this.catalogService.products;
  total = this.basketService.total;

  ajouterAuPanier(produit: Product): void {
    this.catalogService.decreaseStock(produit.id);
    this.basketService.addItem({
      id: produit.id,
      title: produit.title,
      price: produit.price,
    });
  }
}
