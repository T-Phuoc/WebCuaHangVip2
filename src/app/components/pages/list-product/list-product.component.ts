import { Component } from '@angular/core';
import {ProductCardComponent} from "../../product-card/product-card.component";
import {AuthService} from "../../../services/auth.service";
import {StoreService} from "../../../services/store.service";

@Component({
  selector: 'app-list-product',
  standalone: true,
  imports: [
    ProductCardComponent
  ],
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.scss'
})
export class ListProductComponent {

  constructor(public storeService: StoreService) { }


}
