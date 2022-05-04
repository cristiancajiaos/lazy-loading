import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomersDetailComponent } from './customers-detail/customers-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers.component';

const routes: Routes = [
  {
    path: '', component: CustomersComponent, children: [
      { path: ':id/detail', component: CustomersDetailComponent },
      { path: 'list', component: CustomerListComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
