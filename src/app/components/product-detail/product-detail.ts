import { Component, input} from '@angular/core';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetail {
  // withComponentInputBinding() is activated in app.config.ts
 id = input.required<string>();
}
