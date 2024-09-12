import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import { ProductCardComponent } from "../product-card/product-card.component";
import { SharingDataService } from '../../services/sharing-data.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'catalogo',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './catalogo.component.html',
})
export class CatalogoComponent implements OnInit {

  products! : Product[];

  constructor(
    private productService: ProductService,
    private sharingDataServ : SharingDataService){

  }


  ngOnInit(): void {
      this.products = this.productService.findAll();
  }

  addCart(product: Product) {
    this.sharingDataServ.productEventEmiter.emit(product);
  }

}
