import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css'],
})
export class SingleProductComponent implements OnInit {
  @Input() singleProduct: string | undefined;
  @Input() productIndex: number | undefined;
  @Input() index: number | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // console.log(this.singleProduct);
    // console.log(this.productIndex);
    // console.log(this.index)
  }

  clickProduct() {
    console.log(this.index);
    this.router.navigate([`${this.index}`], { relativeTo: this.route });
  }
}
