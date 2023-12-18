import { Injectable } from '@angular/core';
import { Wallet } from '../models/wallet.model';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  private apiUrl = 'https://localhost:44370/api/';

  constructor(private http: HttpClient) { }

  sendCrypto(data: Wallet)
  {
    return this.http.post(`${this.apiUrl}`+"wallet/send", data)
  }



}
