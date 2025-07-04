import { Component, inject, OnInit } from '@angular/core';
import { BasketService } from '../../services/basket/basket-service';
import { CheckoutForm } from './checkout-form/checkout-form';

@Component({
  selector: 'app-basket',
  imports: [CheckoutForm],
  templateUrl: './basket.html',
  styleUrl: './basket.css'
})
export class Basket implements OnInit{
  basketService = inject(BasketService);
  basketItems = this.basketService.items;
  total = this.basketService.total;

  ngOnInit() {
    this.basketService.fetchBasket().subscribe();
  }
}
