import { Injectable } from '@angular/core';
import { Home } from '../models/home.model'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  //private apiUrl = "https://api.coingecko.com/api/v3/coins/";
  private url = 'https://bitcoinaverage-crypto-ticker-and-historical-price.p.rapidapi.com/indices/global/ticker/BTCUSD';
  constructor(private http: HttpClient)
  {
  }

  getBitcoinInformation()
  {
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': '3a187589f4mshcece5ae7da60101p114c3ejsnbb4fde15e9df',
      'X-RapidAPI-Host': 'bitcoinaverage-crypto-ticker-and-historical-price.p.rapidapi.com'
    });

    return this.http.get<Home>(this.url, { headers });
  }

  //getEthereumInformation() {
  //  return this.http.get<Home[]>(`${this.apiUrl}markets?vs_currency=usd&ids=ethereum&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1&locale=en&precision=3`);
  //}

  //getBinanceUSDInformation() {
  //  return this.http.get<Home[]>(`${this.apiUrl}markets?vs_currency=usd&ids=binance-usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1&locale=en&precision=3`);
  //}
}
