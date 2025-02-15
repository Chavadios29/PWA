import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage {
  email = '';
  password = '';

  constructor(private router: Router) { }

  login() {
    if (this.email === 'admin' && this.password === '1234') {
      this.router.navigate(['/loading-success']);
    } else {
      alert('Credenciales incorrectas');
    }
  }
}
