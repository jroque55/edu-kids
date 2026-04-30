import { Component, Input } from '@angular/core';
import { ActivityModel } from './activity.model';

@Component({
  selector: 'app-activity',
  imports: [],
  templateUrl: './activity.html',
  styleUrl: './activity.css',
})
export class Activity {
  @Input() activity!: ActivityModel;
  
  isModalOpen: boolean = false;

  openModal() {
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden'; 
  }

  closeModal() {
    this.isModalOpen = false;
    document.body.style.overflow = 'auto';
  }

  moverCarrusel(elemento: HTMLElement, direccion: number) {
    const desplazamiento = elemento.clientWidth; 
    
    elemento.scrollBy({
      left: desplazamiento * direccion,
      behavior: 'smooth'
    });
  }
}
