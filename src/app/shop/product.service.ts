import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Product } from './product.model';

@Injectable()
export class ProductService {
  productSelected = new Subject<Product>();
  error = new Subject<string>();

  private productsArr: Product[] = [];

  constructor(private http: HttpClient) {}

  getSingleProductDetail(index: number) {
    console.log(index);
    return this.productsArr[index];
  }

  getProducts() {
    console.log(this.productsArr);
    return this.productsArr.slice();
  }

  fetchProducts() {
    return this.http
      .get<Product[]>(
        'https://jiyu-firebase-default-rtdb.asia-southeast1.firebasedatabase.app/products.json'
      )
      .pipe(
        map((responseData) => {
          console.log(responseData);
          this.productsArr = [];
          const productsFetchedArr: Product[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              productsFetchedArr.push({ ...responseData[key] });
              this.productsArr.push({ ...responseData[key] });
            }
          }
          return productsFetchedArr;
        }),
        catchError((errorResponse) => {
          return throwError(() => errorResponse);
        })
      );
  }

  // fetchSingleProduct(index: number) {
  //   console.log(index);
  //   return this.http
  //     .get(
  //       `https://jiyu-firebase-default-rtdb.asia-southeast1.firebasedatabase.app/products/${index}.json`
  //     )
  //     .pipe(
  //       map((responseData) => {
  //         console.log(responseData);
  //         // return this.productsArr[index];
  //       })
  //     );
  // }
}
