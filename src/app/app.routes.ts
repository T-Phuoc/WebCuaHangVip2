import { Routes } from '@angular/router';
import {HomeComponent} from "./components/pages/home/home.component";
import {ListProductComponent} from "./components/pages/list-product/list-product.component";
import {DetailProductComponent} from "./components/pages/detail-product/detail-product.component";
import {CartComponent} from "./components/pages/cart/cart.component";

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'products',
    component: ListProductComponent
  },

  {
    path: 'product/:id',
    component: DetailProductComponent
  },
  {
    path: 'cart',
    component: CartComponent,
  },
];
