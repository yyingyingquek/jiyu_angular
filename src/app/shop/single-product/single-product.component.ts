import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css'],
})
export class SingleProductComponent implements OnInit {
  @Input() singleProduct: string | undefined
  @Input() productIndex: number | undefined

  constructor() {}

  ngOnInit(): void {
    // console.log(this.singleProduct);
    // console.log(this.singleProduct);
  }
}
