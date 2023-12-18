import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  userName: string = "";
  balance: number = 0;
  transactions: any[] = []; 

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userName = 'John Doe';
    this.balance = 1000; 
    this.loadTransactions();
  }

  loadTransactions(): void {

    this.transactions = [];
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate([""]);
  }

  refreshData(): void {
    this.loadTransactions();
  }

}
