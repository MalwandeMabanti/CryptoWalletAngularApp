import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  onSubmit() {
    this.authService.login(
      {
        Email: this.email,
        Password: this.password

      }).subscribe(
        {
          next: (response) => {
            if (response.token) {
              this.router.navigate(['/dashboard']);
            }
            else {
              console.error("No token received");
            }
          },
          error: (error) => {
            console.error("Login error", error)
          }
        });
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

}
