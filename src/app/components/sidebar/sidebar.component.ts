import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor(private router: Router) {

  }

  goToBitcoin()
  {
    this.router.navigate(['/cryptoInformation'])
  }

  get currentUrl() : string {
    return this.router.url;
  }
}
