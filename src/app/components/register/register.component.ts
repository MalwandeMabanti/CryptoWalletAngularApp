import { Component } from '@angular/core';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private authService: AuthService) { }

  onSubmit() {
    this.authService.register(
      {
        FirstName: this.firstName,
        LastName: this.lastName,
        Email: this.email,
        Password: this.password,
        ConfirmPassword: this.confirmPassword
      }).subscribe(response => { console.log(response) });
  }

}
