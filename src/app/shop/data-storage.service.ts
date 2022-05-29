import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from './product.service';
import { map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private productService: ProductService
  ) {}

  fetchProducts() {
    this.http
      .get(
        'https://jiyu-firebase-default-rtdb.asia-southeast1.firebasedatabase.app/products.json'
      )
      .pipe(
        map((responseData) => {
          console.log(responseData);
        })
      )
      .subscribe((products) => {
        console.log(products);
      });
  }
}
