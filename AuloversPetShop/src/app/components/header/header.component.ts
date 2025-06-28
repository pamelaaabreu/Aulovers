import { Component, HostListener } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';

@Component({
  selector: 'app-header',
  imports: [HeroComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isMenuOpen: boolean = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
