import { Component, signal, WritableSignal, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterModule , RouterLink, RouterLinkActive } from '@angular/router';
import { CampgroundService } from '../../services/campground.service';


interface Campground {
  id: number;
  name: string;
  image: string;
}

@Component({
  selector: 'app-campgrounds',
  imports: [NgFor, RouterLink, RouterLinkActive, RouterModule],
  templateUrl: './campgrounds.component.html',
  styleUrl: './campgrounds.component.css'
})
export class CampgroundsComponent {
// Sample campground data (Replace with API call)
campgroundService = inject(CampgroundService);
campgrounds = this.campgroundService.campgrounds; 

constructor() {}

}