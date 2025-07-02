import { Component, input } from '@angular/core';
import { Menu } from './menu/menu';
import { Product } from './product-card/product.types';
import { ProductCard } from './product-card/product-card';

@Component({
  selector: 'app-root',
  imports: [Menu, ProductCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'my first component';
  total = 0;
  products: Product[] = [
    {
      "id": "welsch",
      "title": "Coding the welsch",
      "description": "Tee-shirt col rond - Homme",
      "photo": "/assets/coding-the-welsch.jpg",
      "price": 20,
      "stock": 2
    },
    {
      "id": "world",
      "title": "Coding the world",
      "description": "Tee-shirt col rond - Homme",
      "photo": "/assets/coding-the-world.jpg",
      "price": 18,
      "stock": 1
    },
    {
      "id": "vador",
      "title": "Duck Vador",
      "description": "Tee-shirt col rond - Femme",
      "photo": "/assets/coding-the-stars.jpg",
      "price": 21,
      "stock": 2
    },
    {
      "id": "snow",
      "title": "Coding the snow",
      "description": "Tee-shirt col rond - Femme",
      "photo": "/assets/coding-the-snow.jpg",
      "price": 19,
      "stock": 2
    }
  ];

    addProductToBasket (product: Product)  {
      this.total += product.price;
    }
}
