import { Routes } from '@angular/router';
import { Catalog } from './components/catalog/catalog';
import { Basket } from './components/basket/basket';
import { ProductDetail } from './components/product-detail/product-detail';
import { BasketGuard } from './guards/basket-guard';
import { EmptyBasket } from './components/basket/empty-basket/empty-basket';

export const routes: Routes = [
  {
    path: 'basket',
    component: Basket,
    title: "Mon Panier",
    canMatch: [BasketGuard],
  },
  {
    path: 'basket',
    component: EmptyBasket,
    title: "Mon panier est vide",
  },
  {
    path: 'catalog',
    component: Catalog,
    title: "Liste de produits",
  },
  {
    path: 'product/:id',
    component: ProductDetail,
    title: "Fiche Produit",
  },
  {
    path: '**',
    redirectTo: 'catalog',
  },
];
