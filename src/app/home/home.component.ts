import { Component } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(
    private auth: AuthService,
    private router: Router

  ) {

  }

  async logout () {
    console.log('logout')
    await this.auth.logout()
    this.router.navigate(['/login'])
  }
}
