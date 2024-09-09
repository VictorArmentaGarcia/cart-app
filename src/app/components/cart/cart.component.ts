import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../../models/CartItem';
import { Router } from '@angular/router';

@Component({
  selector: 'cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
})
export class CartComponent {

  items: CartItem[] = [];
  total: number = 0;
  idProductDelete = new EventEmitter();

  constructor(private router: Router){
    this.items = this.router.getCurrentNavigation()?.extras.state!['items'];
    this.total = this.router.getCurrentNavigation()?.extras.state!['total'];
  }

  onDeleteCart(idProduct: number) {
    this.idProductDelete.emit(idProduct);
  }

}
