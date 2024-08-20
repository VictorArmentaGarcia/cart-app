import { Component, Input } from '@angular/core';
import { Product } from '../../models/Product';
import { ProductCardComponent } from "../product-card/product-card.component";

@Component({
  selector: 'catalogo',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './catalogo.component.html',
})
export class CatalogoComponent {

  @Input() products! : Product[];

}
