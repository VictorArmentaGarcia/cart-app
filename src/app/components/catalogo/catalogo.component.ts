import { Component, Input } from '@angular/core';
import { Product } from '../../models/Product';
import { ProductCardComponent } from "../product-card/product-card.component";
import { Router } from '@angular/router';
import { SharingDataService } from '../../services/sharing-data.service';

@Component({
  selector: 'catalogo',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './catalogo.component.html',
})
export class CatalogoComponent {

  @Input() products! : Product[];

  constructor(
    private sharingDataServ : SharingDataService,
    private router: Router){
      if(this.router.getCurrentNavigation()?.extras.state){
        this.products = this.router.getCurrentNavigation()?.extras.state!['productos'];
      }
  }

  addCart(product: Product) {
    this.sharingDataServ.productEventEmiter.emit(product);
  }

}
