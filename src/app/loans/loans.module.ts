import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoansRoutingModule } from './loans-routing.module';
import { LoansComponent } from './loans.component';
import { LoanRequestComponent } from './loan-request/loan-request.component';
import { ListRequestsComponent } from './list-requests/list-requests.component';

@NgModule({
  declarations: [
    LoansComponent,
    LoanRequestComponent,
    ListRequestsComponent
  ],
  imports: [
    CommonModule,
    LoansRoutingModule,
  ]
})
export class LoansModule { }
