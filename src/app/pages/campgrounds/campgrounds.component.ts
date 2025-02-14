import { Component, signal, WritableSignal } from '@angular/core';
import { NgFor } from '@angular/common';



interface Campground {
  name: string;
  image: string;
}

@Component({
  selector: 'app-campgrounds',
  imports: [NgFor],
  templateUrl: './campgrounds.component.html',
  styleUrl: './campgrounds.component.css'
})
export class CampgroundsComponent {
// Sample campground data (Replace with API call)
  campgrounds: WritableSignal<Campground[]> = signal<Campground[]>([
  { name: 'Sunny Hill', image: 'assets/campground1.jpg' },
  { name: 'Forest Retreat', image: 'assets/campground2.jpg' },
  { name: 'Lakeview Camp', image: 'assets/campground3.jpg' },
  { name: 'Mountain Peak', image: 'assets/campground4.jpg' }
  ]);

  constructor() {
    this.loadCampgrounds();
  }

  loadCampgrounds() {
    // Simulating fetching from an API
    setTimeout(() => {
      this.campgrounds.set([
        { name: 'Sunny Hill', image: '/assets/campground1.jpg' },
        { name: 'Forest Retreat', image: '/assets/campground2.jpg' },
        { name: 'Lakeview Camp', image: '/assets/campground3.jpg' },
        { name: 'Mountain Peak', image: '/assets/campground4.jpg' },
        { name: 'Sunset Valley', image: '/assets/campground5.jpg' }
      ]);
    }, 1000);
  }
}