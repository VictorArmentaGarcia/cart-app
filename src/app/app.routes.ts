import { Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';

export const routes: Routes = [
    {path: 'cart', component: CartComponent},
    {path: 'catalogo', component: CatalogoComponent}
];
