import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Transaction } from '../../models/transaction.model';
import { AuthService } from '../../services/auth.service';
import { WalletService } from '../../services/wallet.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  userId: string = "";
  firstName: string = "";
  lastName: string = "";
  email: string = "";
  balance: number = 0;
  transactionsOut: Transaction[] = []
  transactionsIn: Transaction[] = []
  transactions: Transaction[] = []; 

  constructor(
    private authService: AuthService,
    private walletService: WalletService,
    private router: Router
  ) { }

  ngOnInit(): void {
    //this.getUserWithOutTransactions();
    this.getUserWithAllTransactions()
  }

  getUserWithAllTransactions()
  {
    this.getUserWithOutTransactions()
    this.getUserWithInTransactions()
    this.transactions = [...this.transactionsOut, ...this.transactionsIn]
  }

  getUserWithOutTransactions()
  {
    this.walletService.getSpecificUserWithOutTransactions()
      .subscribe(
        {
          next: (response) => {

            this.userId = response.userId
            this.firstName = response.firstName
            this.lastName = response.lastName
            this.email = response.email
            this.balance = response.balance
            this.transactionsOut = response.transactions
          },
          error: (err) => {
            console.error('Error fetching user with transactions:', err);
          }
        })
  }

  getUserWithInTransactions() {
    this.walletService.getSpecificUserWithInTransactions()
      .subscribe(
        {
          next: (response) => {

            this.userId = response.userId
            this.firstName = response.firstName
            this.lastName = response.lastName
            this.email = response.email
            this.balance = response.balance
            this.transactionsIn = response.transactions
          },
          error: (err) => {
            console.error('Error fetching user with transactions:', err);
          }
        })
  }

  //loadTransactions(): void {

  //  this.walletService.receiveAllTransactions()
  //    .subscribe(
  //      {
  //        next: (response) => {
  //          this.transactions = response
  //        },
  //        error: (error) => {
  //          console.error(error)
  //        }
  //    }
  //  );
  //}
  logout(): void {
    this.authService.logout();
    this.router.navigate([""]);
  }

  refreshData(): void {
    this.getUserWithAllTransactions();
  }

}
