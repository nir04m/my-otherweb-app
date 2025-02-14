import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { CampgroundsComponent } from './pages/campgrounds/campgrounds.component';

export const routes: Routes = [
    { path: '', component: LandingComponent },  
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'campgrounds', component: CampgroundsComponent },
];
