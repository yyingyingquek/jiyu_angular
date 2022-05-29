import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Product } from "./product.model";
import { ProductService } from "./product.service";

@Injectable({providedIn: 'root'})
export class ProductResolverService implements Resolve<Product> {
    constructor(private productService: ProductService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    }
}