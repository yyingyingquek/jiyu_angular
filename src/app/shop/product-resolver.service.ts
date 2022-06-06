import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Product } from './product.model';
import { ProductService } from './product.service';

@Injectable({ providedIn: 'root' })
export class ProductResolver implements Resolve<Product[]> {
  constructor(private productService: ProductService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const products = this.productService.getProducts();

    if (products.length === 0) {
      return this.productService.fetchProducts();
    } else {
      return products;
    }
  }
}
