import { Injectable } from '@angular/core';
import {AuthService} from "./auth.service";
import {Product} from "../components/models/product.model";

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  cart: Product[] = [];
  total: number = 0;

  constructor(private authService: AuthService) {
  }

  products : Product[] = [
    {
      id: 1,
      name: 'Mèo Ragdoll',
      price: 15000000,
      description:
        'Mèo Ragdoll là giống mèo lớn, nặng, có bộ lông mềm mại, dài và mượt mà. Mèo Ragdoll có mặt tròn, mắt màu xanh dương, mũi hơi hướng lên, và đôi tai lớn, rộng và tròn. Mèo Ragdoll có bộ lông mềm mại, dài và mượt mà. Mèo Ragdoll có mặt tròn, mắt màu xanh dương, mũi hơi hướng lên, và đôi tai lớn, rộng và tròn.',
      imageUrl: '../assets/Ragdoll.jpeg',
      inStock: 10,
    },
    {
      id: 2,
      name: 'Mèo Munchkin',
      price: 20000000,
      description:
        'Mèo Munchkin là giống mèo có chiều dài chân ngắn, thân dài và đầu to. Mèo Munchkin có bộ lông mềm mại, dài và mượt mà. Mèo Munchkin có mặt tròn, mắt màu xanh dương, mũi hơi hướng lên, và đôi tai lớn, rộng và tròn.',
      imageUrl: '../assets/Munchkin.jpg',
      inStock: 5,
    },
    {
      id: 3,
      name: 'Mèo Scottish Fold',
      price: 10000000,
      description:
        'Mèo Scottish Fold là giống mèo có đặc điểm đặc trưng là đôi tai hơi gập về phía trước. Mèo Scottish Fold có bộ lông mềm mại, dài và mượt mà. Mèo Scottish Fold có mặt tròn, mắt màu xanh dương, mũi hơi hướng lên, và đôi tai lớn, rộng và tròn.',
      imageUrl: '../assets/scottishfold.jpg',
      inStock: 20,
    },
    {
      id: 4,
      name: 'Mèo Sphynx',
      price: 25000000,
      description:
        'Mèo Sphynx là giống mèo không có lông. Mèo Sphynx có bộ lông mềm mại, dài và mượt mà. Mèo Sphynx có mặt tròn, mắt màu xanh dương, mũi hơi hướng lên, và đôi tai lớn, rộng và tròn.',
      imageUrl: '../assets/sphynx.jpg',
      inStock: 50,
    },
    {
      id: 5,
      name: 'Mèo Bengal',
      price: 18000000,
      description:
        'Mèo Bengal là giống mèo có bộ lông màu vàng nâu với vằn sọc đen. Mèo Bengal có bộ lông mềm mại, dài và mượt mà. Mèo Bengal có mặt tròn, mắt màu xanh dương, mũi hơi hướng lên, và đôi tai lớn, rộng và tròn.',
      imageUrl: '../assets/bengal.jpg',
      inStock: 30,
    },
    {
      id: 6,
      name: 'Mèo Persian',
      price: 12000000,
      description:
        'Mèo Persian là giống mèo có bộ lông dài và mượt mà. Mèo Persian có mặt tròn, mắt màu xanh dương, mũi hơi hướng lên, và đôi tai lớn, rộng và tròn.',
      imageUrl: '../assets/persian.jpg',
      inStock: 40,
    },
    {
      id: 7,
      name: 'Mèo Siamese',
      price: 8000000,
      description:
        'Mèo Siamese là giống mèo có bộ lông màu vàng nâu với vằn sọc đen. Mèo Siamese có bộ lông mềm mại, dài và mượt mà. Mèo Siamese có mặt tròn, mắt màu xanh dương, mũi hơi hướng lên, và đôi tai lớn, rộng và tròn.',
      imageUrl: '../assets/siamese.jpg',
      inStock: 60,
    },
    {
      id: 8,
      name: 'Mèo Maine Coon thuần chủng',
      price: 50000000,
      description:
        'mèo Maine Coon là đến từ rừng tự nhiên ở Bắc Mỹ với khả năng săn mồi cực kỳ đáng sợ,đồng thời loài mèo này được biết đến với vẻ đẹp hoang dã khiến ai nhìn thấy cũng bị thu hút.',
      imageUrl: '../assets/Maine-Coon.jpg',
      inStock: 20,
    },

  ];



  addToCart(item: any) {
    if (this.authService.currentUser == null) {
      alert('Bạn cần đăng nhập để thêm vào giỏ hàng');
      return;
    }

    let findIndex = this.cart.findIndex((element) => element.id == item.id);
    let findIndex1 = this.products.findIndex((element) => element.id == item.id);

    if (findIndex1 === -1 || this.products[findIndex1]?.inStock === 0) {
      return;
    }

    if (findIndex != -1) {
      this.cart[findIndex].quantity! += 1;
      this.products[findIndex1].inStock! -= 1;
    } else {
      this.cart.push({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: 1,
        imageUrl: item.imageUrl,
        description: item.description,
        inStock: item.inStock
      });
      this.products[findIndex1].inStock! -= 1;
    }
    console.log(this.products[findIndex1]?.inStock);
    this.totalCost();
  }

  deleteCart(product: Product) {
    if (this.authService.currentUser) {
      let productIndexInCart = this.cart.findIndex((p: any) => p.id === product.id);
      let productIndexInStock = this.products.findIndex((p: any) => p.id === product.id);

      if (productIndexInCart !== -1 && productIndexInStock !== -1) {
        if (this.cart[productIndexInCart].quantity === 1) {
          this.cart.splice(productIndexInCart, 1);
        } else {
          this.cart[productIndexInCart].quantity!--;
        }
        this.products[productIndexInStock].inStock!++;
        console.log(this.cart);
      }
    } else {
      alert('Please login to remove product from cart');
    }
  }

  deleteAllFromCart() {
    for (let product of this.cart) {
      for (let product2 of this.products) {
        if (product.id == product2.id) {
          product2.inStock! += product.quantity!;
          console.log(product2.inStock);
        }
      }
    }
    this.cart = [];
    this.total = 0;
  }

  totalCost() {
    this.total = 0;
    for (let item of this.cart) {
      this.total += item.price * item.quantity!;
    }

    return this.total;
  }

  removeProduct(index: number | undefined) {
    // Xóa sản phẩm khỏi giỏ hàng
    // @ts-ignore
    const cartItem = this.cart[index];

    // @ts-ignore
    if (cartItem.quantity > 1) {
      cartItem.quantity --;
    } else {
      if (typeof index === "number") {
        this.cart.splice(index, 1);
      }
    }

    const product = this.products.find((product) => product.id === cartItem.id);
    if (product) {
      product.inStock += 1;
    }
  }

  getCart() {
    return this.cart;
  }

  getProducts() {
    return this.products;
  }

  checkOut() {
    if (this.cart.length === 0) {
      alert('Không có sản phẩm để thanh toán');
      return;
    }

    this.cart = [];
    this.products.forEach((element) => {
        });
    alert('Thank for purchase our product <3');
  }

}
