import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './modules/core/core.module';
import { SharedModule } from './modules/shared/shared.module';

import { AuthModule } from './modules/auth/auth.module';
import { WalletModule } from './modules/wallet/wallet.module';
import { TransactionsModule } from './modules/transactions/transactions.module';
import { HomeComponent } from './components/home/home.component';
import { CryptoInformationComponent } from './components/crypto-information/crypto-information.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CryptoInformationComponent,
    SidebarComponent,
    NavbarComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    AuthModule,
    WalletModule,
    TransactionsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


