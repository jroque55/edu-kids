import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {

  images: string[] = [
    './carousel-1.jpeg', 
    './carousel-2.jpeg',
    './carousel-3.jpeg',
    './carousel-4.jpeg',
    './carousel-5.jpeg'
  ];

  currentSlide = 0;
  slideInterval: any;
  constructor() {}

  ngOnInit() {
    this.startSlideShow();
  }

  ngOnDestroy() {
    this.stopSlideShow(); 
  }

  startSlideShow() {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 4000);
  }

  stopSlideShow() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.images.length;
  }

  setSlide(index: number) {
    this.currentSlide = index;
    this.stopSlideShow();
    this.startSlideShow();
  }

  nextSlideManual() {
    this.nextSlide(); // Llama a la función que ya tenías
    this.resetTimer();
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.images.length) % this.images.length;
    this.resetTimer();
  }

  resetTimer() {
    this.stopSlideShow();
    this.startSlideShow();
  }
}
