import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AuthService} from "./services/auth.service";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {ProductCardComponent} from "./components/product-card/product-card.component";
import {StoreService} from "./services/store.service";
import {CartComponent} from "./components/pages/cart/cart.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ProductCardComponent, CartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bai2';
  StoreService: any;


  constructor(public auth: AuthService, public storeService: StoreService) { }

}
