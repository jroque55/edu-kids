import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isMenuOpen: boolean = false;
  isVisible: boolean = true;
  lastScrollTop: number = 0;

  // Función que abre o cierra el menú
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    
    // Si scrolleamos hacia abajo y pasamos el área del header
    if (st > this.lastScrollTop && st > 100) {
      this.isVisible = false;
      this.isMenuOpen = false; // Cerramos menú si estaba abierto al bajar
    } else {
      // Si scrolleamos hacia arriba
      this.isVisible = true;
    }
    this.lastScrollTop = st <= 0 ? 0 : st;
  }
}
