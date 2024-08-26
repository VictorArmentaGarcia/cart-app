import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../../models/CartItem';
import { CartComponent } from "../cart/cart.component";

@Component({
  selector: 'cart-modal',
  standalone: true,
  imports: [CartComponent],
  templateUrl: './cart-modal.component.html',
})
export class CartModalComponent {

  @Input() items: CartItem[] = [];
  @Input() total: number = 0;

  @Output() idProductDelete = new EventEmitter();
  @Output() eventCloseEmit = new EventEmitter();

  onDeleteCart(idProduct: number) {
    this.idProductDelete.emit(idProduct);
  }

  closeCart(): void {
    this.eventCloseEmit.emit();
  }

}
