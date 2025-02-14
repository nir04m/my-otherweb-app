import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';
import { CampgroundService } from '../../services/campground.service';


interface Campground {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
  author: { id: number; username: string };
}
@Component({
  selector: 'app-show',
  imports: [NgIf],
  templateUrl: './show.component.html',
  styleUrl: './show.component.css'
})
export class ShowComponent {
  route = inject(ActivatedRoute);
  campgroundService = inject(CampgroundService);

  campground: Campground | undefined; // ✅ Explicitly define the type

  constructor() {
    this.loadCampground();
  }

  loadCampground() {
    const id = Number(this.route.snapshot.paramMap.get('id')); // ✅ Get ID from URL
    this.campground = this.campgroundService.getCampgroundById(id); // ✅ Fetch from service
  }
}
