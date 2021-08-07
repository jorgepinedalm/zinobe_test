import { Component, OnInit, ViewChild } from '@angular/core';
import { LoanRequestComponent } from './loan-request/loan-request.component';
import {MatDialog} from '@angular/material/dialog';
import { Loan } from '../models/loan/loan';
import { Store } from '@ngxs/store';
import { AddLoan } from '../models/loan/loan.actions';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css']
})
export class LoansComponent implements OnInit {

  @ViewChild(LoanRequestComponent) loanRequest : LoanRequestComponent | undefined;

  constructor(public dialog: MatDialog, private store : Store) { }

  loan! : Loan;

  ngOnInit(): void {
  }
  openModal(): void {
    const dialogRef = this.dialog.open(LoanRequestComponent, {
      width: '320px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        console.log('The dialog was closed', result);
        this.store.dispatch(new AddLoan(result));
      }
      
    });
  }
}
