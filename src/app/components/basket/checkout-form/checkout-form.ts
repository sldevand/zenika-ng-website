import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CheckoutDetails } from '../basket.types';

@Component({
  selector: 'app-checkout-form',
  imports: [FormsModule, NgClass],
  templateUrl: './checkout-form.html',
  styleUrl: './checkout-form.css',
})
export class CheckoutForm {
  checkout(checkoutDetails: CheckoutDetails): void {
    
    console.log(checkoutDetails);
  }
}
