import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  productDetails: Product;
  index: number;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log(`in single product`);
    this.route.params.subscribe((params: Params) => {
      this.index = +params['id'];
      this.productDetails = this.productService.getSingleProductDetail(this.index);
    });
    console.log(this.productDetails);
  }
}
