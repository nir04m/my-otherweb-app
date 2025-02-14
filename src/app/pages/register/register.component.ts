import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgIf} from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [NgIf, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  username = '';
  password = '';
  errorMessage: string | null = null;

  constructor(private router: Router) {}

  onSubmit() {
    if (this.username && this.password) {
      // Simulate saving user (replace with real API call)
      localStorage.setItem('user', JSON.stringify({ username: this.username }));
      this.router.navigate(['/']); // Redirect to home
    } else {
      this.errorMessage = 'Please enter a username and password!';
    }
  }
}
