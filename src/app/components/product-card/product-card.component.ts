
import {Component, Input} from '@angular/core';
import {StoreService} from "../../services/store.service";
import {Product} from "../models/product.model";

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() product!: Product;

  constructor(public storeService: StoreService) {
    console.log(this.storeService.cart);
  }
}
