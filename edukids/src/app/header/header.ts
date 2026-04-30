import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isMenuOpen: boolean = false;

  // Función que abre o cierra el menú
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
