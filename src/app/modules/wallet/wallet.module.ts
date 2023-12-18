import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { TransactionsModule } from '../transactions/transactions.module';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { SendCryptoComponent } from '../../components/send-crypto/send-crypto.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SendCryptoComponent
  ],
  imports: [
    CommonModule,
    TransactionsModule,
    SharedModule
  ],
  exports: [
    DashboardComponent,
    SendCryptoComponent
  ]
})
export class WalletModule { }
