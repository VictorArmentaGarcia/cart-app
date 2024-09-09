import { Component, Input } from '@angular/core';
import { CartItem } from '../../models/CartItem';
import { RouterModule } from '@angular/router';
import { Product } from '../../models/Product';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {

  @Input() items: CartItem[]= [];
  
  @Input() total: number = 0;
  
  @Input() productos: Product[] = [];

}
