import { Customer } from './../../interfaces/customer';
import { CUSTOMER_LIST } from './../../data/customer-list';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customers-detail',
  templateUrl: './customers-detail.component.html',
  styleUrls: ['./customers-detail.component.scss']
})
export class CustomersDetailComponent implements OnInit {

  id: string;
  customerRecord: Customer;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params?.subscribe(params => {
      if (params['id']) {
        this.id = params['id'];
        console.log(this.id);
        this.getCustomer();
      }
    });
  }

  getCustomer(): void {
    this.customerRecord = CUSTOMER_LIST.filter(x => x.id.toLocaleString() == this.id)[0];
  }

}
