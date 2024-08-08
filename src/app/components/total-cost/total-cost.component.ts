import {Component, Input, numberAttribute} from '@angular/core';
import {StoreService} from "../../services/store.service";

@Component({
  selector: 'app-total-cost',
  standalone: true,
  imports: [],
  templateUrl: './total-cost.component.html',
  styleUrl: './total-cost.component.scss'
})
export class TotalCostComponent {
  @Input({transform: numberAttribute}) total!: number;

  constructor(public storeService: StoreService) {}

}
