import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/Product';
import { ProductCardComponent } from "../product-card/product-card.component";
import { Router } from '@angular/router';

@Component({
  selector: 'catalogo',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './catalogo.component.html',
})
export class CatalogoComponent {

  @Input() products! : Product[];
  @Output() productEventEmiter: EventEmitter<Product> = new EventEmitter<Product>();

  constructor(private router: Router){
    this.products = this.router.getCurrentNavigation()?.extras.state!['productos'];
  }

  addCart(product: Product) {
    this.productEventEmiter.emit(product);
  }

}
