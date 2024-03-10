import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard'
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', component: HomeComponent, ...canActivate(() => redirectUnauthorizedTo('/login')) },
    { path: 'login', pathMatch: 'full', component: LoginComponent}
];
