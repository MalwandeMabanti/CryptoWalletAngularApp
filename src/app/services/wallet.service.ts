import { Injectable } from '@angular/core';
import { Wallet } from '../models/wallet.model';
import { HttpClient } from '@angular/common/http'
import { Transaction } from '../models/transaction.model';
import { SpecificUser } from '../models/specific-user.model';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  private apiUrl = 'https://localhost:44370/api/wallet/';

  constructor(private http: HttpClient) { }

  sendCrypto(data: Wallet)
  {
    return this.http.post(`${this.apiUrl}`+"send", data)
  }

  //receiveAllTransactions()
  //{
  //  return this.http.get<Transaction[]>(`${this.apiUrl}"GetAllUserTransactions"`)
  //}

  getSpecificUserWithOutTransactions()
  {
    return this.http.get<SpecificUser>(`${this.apiUrl}GetSpecificUserWithOutTransactions`)
  }

  getSpecificUserWithInTransactions() {
    return this.http.get<SpecificUser>(`${this.apiUrl}GetSpecificUserWithInTransactions`)
  }



}
