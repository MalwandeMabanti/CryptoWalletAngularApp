import { Component, OnInit } from '@angular/core';
import { PublicTrasactions } from '../../models/public-transaction.model';
import { WalletService } from '../../services/wallet.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit
{

    allTransactions: PublicTrasactions[] = [];

    constructor(private walletService: WalletService)
    {
    }

    ngOnInit(): void {
      this.receiveAllTransactions()
    }

  receiveAllTransactions(): void
  {
    this.walletService.receiveAllTransactions()
      .subscribe(
        {
          next: (response) => {
            this.allTransactions = response
            this.allTransactions.forEach(element =>
            {
              console.log(this.allTransactions, " and everything else")
            })
          },
          error: (err) => {
            console.error('Error fetching user with transactions:', err);
          }
        }
      )
  }


}

