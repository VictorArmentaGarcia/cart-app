import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/Product';

@Component({
  selector: 'div[product-card]',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {

  @Input() product! : Product;
  @Output() productEventEmiter: EventEmitter<Product> = new EventEmitter<Product>();

  addCart(product: Product) {
    this.productEventEmiter.emit(product);
  }

}
