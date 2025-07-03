import { Component, computed, inject } from '@angular/core';
import { BasketService } from '../../services/basket/basket-service';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {
    private basketService = inject(BasketService);
    quantity = computed<number>(() => this.basketService.items().length);
}
