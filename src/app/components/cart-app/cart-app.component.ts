import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/Product';
import { CatalogoComponent } from "../catalogo/catalogo.component";
import { CartItem } from '../../models/CartItem';
import { CartComponent } from "../cart/cart.component";

@Component({
  selector: 'cart-app',
  standalone: true,
  imports: [CatalogoComponent, CartComponent],
  templateUrl: './cart-app.component.html',
})
export class CartAppComponent implements OnInit {

  productos: Product[]= [];
  items: CartItem[]= [];
  @Output() productEventEmiter: EventEmitter<Product> = new EventEmitter<Product>();

  constructor(private productService: ProductService){

  }

  addCart(product: Product) {
    this.items = [... this.items, { product: {...product } , quantity: 1} ];
  }

  ngOnInit(): void {
    this.productos = this.productService.findAll();
  }

}
