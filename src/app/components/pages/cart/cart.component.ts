import { Component, Input } from '@angular/core';
import { StoreService } from '../../../services/store.service';
import { TotalCostComponent } from '../../total-cost/total-cost.component';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    TotalCostComponent
  ],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  @Input() product!: Product;

  constructor(public storeService: StoreService) {
    console.log(this.storeService.cart);
  }

  protected readonly StoreService = StoreService;
  $index: number | undefined;
}
