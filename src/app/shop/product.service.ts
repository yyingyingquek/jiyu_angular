import { EventEmitter, Injectable } from '@angular/core';

import { Product } from './product.model';

@Injectable()
export class ProductService {
  productSelected = new EventEmitter<Product>();
  private products: Product[] = [
    new Product(1, 'product name 1'),
    new Product(2, 'product name 2'),
  ];

  getProducts() {
    return this.products.slice();
  }

  getSingleProductDetail(index: number) {
    console.log(index);
    return this.products[index];
  }
}
