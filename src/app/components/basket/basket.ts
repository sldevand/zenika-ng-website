import { Component, inject } from '@angular/core';
import { BasketService } from '../../services/basket/basket-service';
import { BasketItem } from '../../services/basket/basket-item';

@Component({
  selector: 'app-basket',
  imports: [],
  templateUrl: './basket.html',
  styleUrl: './basket.css'
})
export class Basket {
  basketService = inject(BasketService);
  basketItems = this.basketService.items;
  total = this.basketService.total;

  constructor() {
    this.basketService.fetchBasket().subscribe();
  }
}
