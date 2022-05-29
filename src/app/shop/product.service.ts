import { EventEmitter, Injectable } from '@angular/core';

import { Product } from './product.model';

@Injectable()
export class ProductService {
  productSelected = new EventEmitter<Product>();
  private products: Product[] = [
    new Product(1, 'product name 1', 'hello', 0, 80, 'test'),
    new Product(2, 'product name 2', 'hello', 1, 78, 'test 1'),
  ];

  setProducts(products: Product[]) {
    this.products = products
  }

  getProducts() {
    return this.products.slice();
  }

  getSingleProductDetail(index: number) {
    console.log(index);
    return this.products[index];
  }
}
