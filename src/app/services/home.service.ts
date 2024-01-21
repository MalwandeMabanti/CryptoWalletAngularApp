import { Injectable } from '@angular/core';
import { Home } from '../models/home.model'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

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
}
