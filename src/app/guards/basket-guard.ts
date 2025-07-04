import { inject } from '@angular/core';
import { CanMatchFn } from '@angular/router';
import { BasketService } from '../services/basket/basket-service';

export const BasketGuard: CanMatchFn = (route, segments) => {
  const basketService = inject(BasketService);
  basketService.fetchBasket().subscribe();
  return basketService.items().length > 0;
};
