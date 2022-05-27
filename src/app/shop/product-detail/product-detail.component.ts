import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  productDetails: Product | undefined;
  id: number | undefined;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log(this.id)
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.productDetails = this.productService.getSingleProductDetail(this.id);
    });
  }

  // moreProductDetails() {
  //   this.router.navigate([this.id], { relativeTo: this.route });
  // }
}
