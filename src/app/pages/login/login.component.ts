import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgIf} from '@angular/common';


@Component({
  selector: 'app-login',
  imports: [NgIf, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage: string | null = null;

  constructor(private router: Router) {}

  onSubmit() {
    if (this.username === 'admin' && this.password === 'password123') {
      // Simulate successful login (Replace this with a real API call)
      localStorage.setItem('user', JSON.stringify({ username: this.username }));
      this.router.navigate(['/']); // Redirect to home
    } else {
      this.errorMessage = 'Invalid username or password!';
    }
  }
}
