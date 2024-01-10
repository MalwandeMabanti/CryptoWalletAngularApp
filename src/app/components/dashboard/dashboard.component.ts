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
  transactions: Transaction[] = []; 

  constructor(
    private authService: AuthService,
    private walletService: WalletService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getUserWithTransactions();
  }

  getUserWithTransactions()
  {
    this.walletService.getSpecificUserWithTransactions()
      .subscribe(
        {
          next: (response) => {

            console.log("Response:", response);

            this.userId = response.userId
            this.firstName = response.firstName
            this.lastName = response.lastName
            this.email = response.email
            this.balance = response.balance
            this.transactions = response.transactions

            console.log("Assigned Values:", {
              userId: this.userId,
              firstName: this.firstName,
              lastName: this.lastName,
              email: this.email,
              balance: this.balance,
              transactions: this.transactions
            });

          },
          error: (err) => {
            console.error('Error fetching user with transactions:', err);
          }
        })
  }

  loadTransactions(): void {

    this.walletService.receiveAllTransactions()
      .subscribe(
        {
          next: (response) => {
            this.transactions = response
          },
          error: (error) => {
            console.error(error)
          }
      }
    );
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate([""]);
  }

  refreshData(): void {
    this.loadTransactions();
  }

}
