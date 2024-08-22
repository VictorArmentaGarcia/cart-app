import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../../models/CartItem';

@Component({
  selector: 'cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
})
export class CartComponent {

  @Input() items: CartItem[] = [];
  @Output() idProductDelete = new EventEmitter();

  onDeleteCart(idProduct: number) {
    this.idProductDelete.emit(idProduct);
  }

}
