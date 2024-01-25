import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router} from '@angular/router';
import { filter } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    isLoggedIn: boolean = false;

    constructor(
      private router: Router,
      private authService: AuthService
    )
    {
    }

  ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe(loggedIn => {
      this.isLoggedIn = loggedIn;
    })

  }

    login(): void {
     
      this.router.navigate(["/login"]);
      
    }




    logout(): void {
      this.authService.logout();
      this.router.navigate([""]);
    }

  get currentUrl() {
    return this.router.url;
  }

  get homeUrl()
  {
    return this.router.url;
  }


}
