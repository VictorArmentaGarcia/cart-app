import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/Product';
import { CatalogoComponent } from "../catalogo/catalogo.component";
import { CartItem } from '../../models/CartItem';
import { CartComponent } from "../cart/cart.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { Router, RouterOutlet } from '@angular/router';
import { SharingDataService } from '../../services/sharing-data.service';

@Component({
  selector: 'cart-app',
  standalone: true,
  imports: [CatalogoComponent, CartComponent, NavbarComponent, RouterOutlet],
  templateUrl: './cart-app.component.html',
})
export class CartAppComponent implements OnInit {

  items: CartItem[]= [];
  @Output() productEventEmiter: EventEmitter<Product> = new EventEmitter<Product>();
  total: number = 0;

  constructor(
    private router: Router,
    private sharingDataServ: SharingDataService,
    private productService: ProductService){
    
  }

  ngOnInit(): void {
    this.items = JSON.parse(sessionStorage.getItem('cart') || '[]');
    this.calculateTotal();
    this.onDeleteCart();
    this.addCart();
  }

  addCart() {
    this.sharingDataServ.productEventEmiter.subscribe(product => {

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
      this.router.navigate(['/cart'], {
        state: { items: this.items, total: this.total }
      });
    })
  }

  onDeleteCart(): void {

    this.sharingDataServ.IdProductDelete.subscribe(id => {
      console.log("se ejecutar el eventi");
      this.items = this.items.filter(item => item.product.id !== id);
      this.calculateTotal();
      this.saveSesion();

      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate(['/cart'], {
          state: { items: this.items, total: this.total }
        });
      });

    })
  }

  calculateTotal(): void {
    this.total = this.items.reduce((acumulator , item) => acumulator + item.product.price * item.quantity , 0);
  }
 
  saveSesion(): void {
    sessionStorage.setItem('cart', JSON.stringify(this.items));
  }

}
