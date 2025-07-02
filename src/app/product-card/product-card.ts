import { Component, input, output } from '@angular/core';
import { Product } from './product.types';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {
  product = input.required<Product>();
  addToBasket = output<Product>();

  onClick() {
    this.addToBasket.emit(this.product());
  }
}
