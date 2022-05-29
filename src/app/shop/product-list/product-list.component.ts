import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataStorageService } from '../data-storage.service';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-single-product',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[];
  loadedProducts: Product[] = []
  @Input() singleProduct: string;
  @Input() productIndex: number;
  @Input() index: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private dataService: DataStorageService,
    private http: HttpClient,
  ) {}

  ngOnInit(): void {
    this.fetchProducts()
  }

  clickProduct() {
    console.log(this.index);
    this.router.navigate([`${this.index}`], { relativeTo: this.route });
  }



  private fetchProducts() {
    this.http
      .get(
        'https://jiyu-firebase-default-rtdb.asia-southeast1.firebasedatabase.app/products.json'
      )
      .pipe(
        map((responseData) => {
          console.log(responseData);
          const productsArr: Product[] = []
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              productsArr.push({...responseData[key], id:key})
            }
          }
          return productsArr
        })
      )
      .subscribe((products) => {
        console.log(products);
        this.loadedProducts = products
      });
  }
}
