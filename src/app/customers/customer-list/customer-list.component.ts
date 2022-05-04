import { CUSTOMER_LIST } from './../../data/customer-list';
import { Customer } from './../../interfaces/customer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  customerList: Array<Customer> = [];

  constructor() { }

  ngOnInit(): void {
    this.customerList = CUSTOMER_LIST;
  }

}
