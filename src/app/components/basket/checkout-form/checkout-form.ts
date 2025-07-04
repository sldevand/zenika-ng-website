import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CheckoutDetails } from '../basket.types';
import { BasketService } from '../../../services/basket/basket-service';

@Component({
  selector: 'app-checkout-form',
  imports: [FormsModule, NgClass],
  templateUrl: './checkout-form.html',
  styleUrl: './checkout-form.css',
})
export class CheckoutForm {
  basketService = inject(BasketService);
  checkout(checkoutDetails: CheckoutDetails): void {
    this.basketService.checkout(checkoutDetails).subscribe();
  }
}
