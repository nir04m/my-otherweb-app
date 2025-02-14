import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterLink} from '@angular/router';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  imports: [NgIf, RouterLink]
})
export class LandingComponent {
  error: string | null = null;
  success: string | null = null;

  constructor() {
    // Example: Simulate an error or success message
    this.error = ''; // Example: "Something went wrong."
    this.success = ''; // Example: "Welcome to YelpCamp!"
  }
}
