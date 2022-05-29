import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[];
  loadedProducts: Product[] = [];
  @Input() singleProduct: string;
  @Input() productIndex: number;
  @Input() index: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.productService.fetchProducts().subscribe((products) => {
      console.log(products);
      this.loadedProducts = products;
    });
  }

  clickProduct() {
    console.log(this.index);
    this.router.navigate([`${this.index}`], { relativeTo: this.route });
  }
}
