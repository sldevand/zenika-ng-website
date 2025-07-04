import { Component, input, output } from '@angular/core';
import { Product } from '../product';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [NgClass, RouterLink],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
  standalone :true
})
export class ProductCard {
  product = input.required<Product>();
  addToBasket = output<Product>();

  onClick() {
    this.addToBasket.emit(this.product());
  }
}
