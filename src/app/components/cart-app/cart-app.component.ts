import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/Product';
import { CatalogoComponent } from "../catalogo/catalogo.component";
import { CartItem } from '../../models/CartItem';
import { CartComponent } from "../cart/cart.component";
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'cart-app',
  standalone: true,
  imports: [CatalogoComponent, CartComponent, NavbarComponent],
  templateUrl: './cart-app.component.html',
})
export class CartAppComponent implements OnInit {

  productos: Product[]= [];
  items: CartItem[]= [];
  @Output() productEventEmiter: EventEmitter<Product> = new EventEmitter<Product>();
  total: number = 0;

  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.productos = this.productService.findAll();
    this.items = JSON.parse(sessionStorage.getItem('cart') || '[]');
    this.calculateTotal();
  }

  addCart(product: Product) {
    const hasItem = this.items.find(
      prod => prod.product.id === product.id);

    if(hasItem){
      this.items = this.items.map(
        item => {
          if(item.product.id === product.id){
            return {
              ... item, quantity : item.quantity + 1
            }
          }
          return item;
        }
      );
    }else{
      this.items = [... this.items, { product: {...product } , quantity: 1} ];
    }
    this.calculateTotal();
    this.saveSesion();
  }

  onDeleteCart(idProduct: number): void {
    this.items = this.items.filter(item => item.product.id !== idProduct);
    this.calculateTotal();
    this.saveSesion();
  }

  calculateTotal(): void {
    this.total = this.items.reduce((acumulator , item) => acumulator + item.product.price * item.quantity , 0);
  }
 
  saveSesion(): void {
    sessionStorage.setItem('cart', JSON.stringify(this.items));
  }

}
