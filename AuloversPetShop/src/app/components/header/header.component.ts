import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  activeSection: string = 'whoWeAre';

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = ['whoWeAre', 'services', 'benefits', 'contact'];
    const scrollPosition = window.pageYOffset + 100; // 100px de offset para melhorar o efeito

    for (let section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const top = element.offsetTop;
        const height = element.offsetHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
          this.activeSection = section;
          break;
        }
      }
    }
  }
}
