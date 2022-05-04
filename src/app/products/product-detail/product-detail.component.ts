import { PRODUCT_LIST } from './../../data/product-list';
import { ActivatedRoute } from '@angular/router';
import { Product } from './../../interfaces/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  id: string;
  product: Product;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params?.subscribe(params => {
      if (params['id']) {
        this.id = params['id'];
        this.getProduct();
      }
    });
  }

  getProduct() {
    this.product = PRODUCT_LIST.filter(x => x.id.toLocaleString().match(this.id))[0];
  }

}
