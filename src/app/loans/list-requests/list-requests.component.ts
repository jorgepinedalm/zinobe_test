import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Loan } from 'src/app/models/loan/loan';

@Component({
  selector: 'app-list-requests',
  templateUrl: './list-requests.component.html',
  styleUrls: ['./list-requests.component.css']
})
export class ListRequestsComponent implements OnInit {

  public loans : Observable<Loan>

  constructor(private store : Store) { 
    this.loans = this.store.select(state => state.loans.loans);
  }

  ngOnInit(): void {
  }

  

}
