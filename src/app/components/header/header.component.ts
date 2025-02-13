import { Component, signal, inject } from '@angular/core';
import { NgIf, isPlatformBrowser  } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { PLATFORM_ID } from '@angular/core';


@Component({
  selector: 'app-header',
  imports: [NgIf, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  currentUser = signal<{ username: string } | null>(null);
  menuOpen = signal<boolean>(false);
  private platformId = inject(PLATFORM_ID);

  constructor(private router: Router) {
    this.loadUser();
  }

  loadUser() {
    if (isPlatformBrowser(this.platformId)) {
      const user = localStorage.getItem('user');
      if (user) {
        this.currentUser.set(JSON.parse(user));
      }
    }
  }

  logout() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('user');
      this.currentUser.set(null);
      this.router.navigate(['/login']);
    }
  }

  toggleMenu() {
    this.menuOpen.set(!this.menuOpen());
  }
}
