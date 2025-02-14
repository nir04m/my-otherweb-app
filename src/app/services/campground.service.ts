import { Injectable, signal } from '@angular/core';

interface Campground {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
  author: { id: number; username: string };
}


@Injectable({
  providedIn: 'root'
})
export class CampgroundService {
  campgrounds = signal<Campground[]>([
    { id: 1, name: 'Sunny Hill', image: 'assets/campground1.jpg', price: 40, description: 'A peaceful place.', author: { id: 1, username: 'admin' } },
    { id: 2, name: 'Forest Retreat', image: 'assets/campground2.jpg', price: 50, description: 'Great for hiking.', author: { id: 2, username: 'john_doe' } },
    { id: 3, name: 'Lakeview Camp', image: 'assets/campground3.jpg', price: 35, description: 'Perfect by the lake.', author: { id: 3, username: 'jane_doe' } },
    { id: 4, name: 'Mountain Peak', image: 'assets/campground4.jpg', price: 35, description: 'Perfect by the lake.', author: { id: 3, username: 'jane_doe' } },
    { id: 5, name: 'Sunset Valley', image: 'assets/campground5.jpg', price: 35, description: 'Perfect by the lake.', author: { id: 3, username: 'jane_doe' } }
  ]);

  getCampgroundById(id: number): Campground | undefined {
    return this.campgrounds().find(campground => campground.id === id);
  }

  constructor() { }
}
