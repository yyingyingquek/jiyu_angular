import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Product } from './product.model';

@Injectable()
export class ProductService {
  productSelected = new EventEmitter<Product>();
  error = new Subject<string>();

  productsArr: Product[] = [];

  constructor(private http: HttpClient) {}

  getSingleProductDetail(index: number) {
    console.log(index);
    return this.productsArr[index];
  }

  fetchProducts() {
    return this.http
      .get(
        'https://jiyu-firebase-default-rtdb.asia-southeast1.firebasedatabase.app/products.json'
      )
      .pipe(
        map((responseData) => {
          console.log(responseData);
          this.productsArr = [];
          const productsFetchedArr: Product[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              productsFetchedArr.push({ ...responseData[key], id: key });
              this.productsArr.push({ ...responseData[key], id: key });
            }
          }
          return productsFetchedArr;
        }),
        catchError((errorResponse) => {
          return throwError(errorResponse);
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
