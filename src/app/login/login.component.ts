import { Component } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(
    private auth: AuthService,
    private router: Router
  ) { }
  onClick() {
    this.auth.loginWithGoogle()
    .then(() => this.router.navigate(['/']))
    .catch(err => console.error(err))
  
  }
}
