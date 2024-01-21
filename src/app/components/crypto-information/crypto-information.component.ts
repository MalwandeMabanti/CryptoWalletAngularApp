import { Component, Input, OnInit } from '@angular/core';
import { Home } from '../../models/home.model';
import { HomeService } from '../../services/home.service'


@Component({
  selector: 'app-crypto-information',
  templateUrl: './crypto-information.component.html',
  styleUrls: ['./crypto-information.component.scss']
})
export class CryptoInformationComponent implements OnInit {

  cryptoInformation: Home | undefined;
  constructor(
    private homeService: HomeService
  ) { }
  ngOnInit(): void {
    this.getBitcoinInformation()
  }

  getBitcoinInformation() {
    this.homeService.getBitcoinInformation()
      .subscribe(
        {
          next: (response) => {
            response.id = 1;
            response.name = "Bitcoin"
            this.cryptoInformation = response;
          },
          error: (err) => {
            console.error('Error fetching crypto information:', err)
          }
        })
  }


  
}
