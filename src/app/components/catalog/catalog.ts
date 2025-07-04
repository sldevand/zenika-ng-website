import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../../components/product';
import { ProductCard } from '../../components/product-card/product-card';
import { CatalogService } from '../../services/catalog/catalog-service';
import { BasketService } from '../../services/basket/basket-service';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-catalog',
  imports: [ProductCard, CurrencyPipe, RouterLink],
  templateUrl: './catalog.html',
  styleUrl: './catalog.css'
})
export class Catalog implements OnInit{
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
  }
}
