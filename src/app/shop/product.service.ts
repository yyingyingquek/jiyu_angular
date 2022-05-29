import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Product } from './product.model';

@Injectable()
export class ProductService {
  productSelected = new EventEmitter<Product>();
  error = new Subject<string>();

  private products: Product[] = [
    new Product(1, 'product name 1', 'hello', 0, 80, 'test'),
    new Product(2, 'product name 2', 'hello', 1, 78, 'test 1'),
  ];

  constructor(private http: HttpClient) {}

  setProducts(products: Product[]) {
    this.products = products;
  }

  getProducts() {
    return this.products.slice();
  }

  getSingleProductDetail(index: number) {
    console.log(index);
    return this.products[index];
  }

  fetchProducts() {
    return this.http
      .get(
        'https://jiyu-firebase-default-rtdb.asia-southeast1.firebasedatabase.app/products.json'
      )
      .pipe(
        map((responseData) => {
          console.log(responseData);
          const productsArr: Product[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              productsArr.push({ ...responseData[key], id: key });
            }
          }
          return productsArr;
        }),
        catchError((errorResponse) => {
          return throwError(errorResponse);
        })
      );
  }
}
