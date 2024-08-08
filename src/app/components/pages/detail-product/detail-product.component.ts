import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Product} from "../../models/product.model";
import {StoreService} from "../../../services/store.service";

@Component({
  selector: 'app-detail-product',
  standalone: true,
  imports: [],
  templateUrl: './detail-product.component.html',
  styleUrl: './detail-product.component.scss'
})
export class DetailProductComponent {
  detailProduct!: Product | undefined;
  constructor(private activatedRoute: ActivatedRoute,
              private storeService: StoreService) {
    const { id } = this.activatedRoute.snapshot.params;
    this.detailProduct = this.storeService.products.find((element)=> element.id == parseInt(id));
    console.log(this.detailProduct);
  }
}
