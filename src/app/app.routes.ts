import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LandingComponent } from './pages/landing/landing.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },  
    { path: 'landing', component: LandingComponent },
    { path: 'login', component: LoginComponent },
];
