import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionHistoryComponent } from '../../components/transaction-history/transaction-history.component'



@NgModule({
  declarations: [
    TransactionHistoryComponent
  ],
  imports: [
    CommonModule,
    
  ],
  exports: [
    TransactionHistoryComponent
  ]
})
export class TransactionsModule { }
