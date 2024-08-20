import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/Product';

@Component({
  selector: 'cart-app',
  standalone: true,
  imports: [],
  templateUrl: './cart-app.component.html',
})
export class CartAppComponent implements OnInit {

  productos: Product[]= [];

  constructor(private productService: ProductService){

  }

  ngOnInit(): void {
    this.productos = this.productService.findAll();
  }

}
