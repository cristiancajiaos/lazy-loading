import { PRODUCT_LIST } from './../../data/product-list';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productList: Array<Product> = [];

  constructor(

  ) { }

  ngOnInit(): void {
    this.productList = PRODUCT_LIST;
  }

}
