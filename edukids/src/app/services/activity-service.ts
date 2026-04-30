import { Injectable } from '@angular/core';
import { ActivityModel } from '../activity/activity.model';

@Injectable({
  providedIn: 'root',
})
export class ActivityService {

  private activities: ActivityModel[] = [
  {
    nombre: 'Ajedrez',
    descripcion: 'Brindale a tu hijo(a) la oportunidad de aprender más sobre este deporte-ciencia, desarrollando estrategias, mejorando su agilidad mental y su capacidad de análisis.',
    imagen: ['ajedrez1.jpeg', 'ajedrez2.jpeg', 'ajedrez3.jpeg', 'ajedrez4.jpeg'],
    icono: 'chess.svg',
  },
  {
    nombre: 'Baile Kids',
    descripcion: 'Potencia la expresión corporal y energía física de tu hijo(a), transmitiendo sus emociones en cada movimiento y ganando confianza y seguridad en si mismo(a)s.',
    imagen: ['baile1.jpeg', 'baile2.jpeg'],
    icono: 'dance-kids.svg',
  },
  /*{
    nombre: 'Ballet',
    descripcion: 'Los movimientos con una expresión libre y fluida de estados, emociones e ideas, algo que transmitimos a nuestras alumnas en cada baile.',
    imagen: ['ballet1.jpg', 'ballet2.jpg'],
    icono: 'ballet.svg',
  },
  {
    nombre: 'Canto',
    descripcion: 'Permite a tu hijo(a) expresarse y transmitir sus emociones a través del canto de forma rápida y fluida ejecutando técnicas de vocalización y ejercicios prácticos.',
    imagen: ['canto1.jpg', 'canto2.jpg'],
    icono: 'microphone.svg',
  },*/
  {
    nombre: 'Comunicación',
    descripcion: 'Refuérzalo con nosotros y aprenderá de forma fácil y rápida los conceptos básicos de comunicación, razonamiento verbal y comprensión lectora.',
    imagen: [],
    icono: 'communication.svg',
  },
  {
    nombre: 'Arte y Pintura',
    descripcion: 'Desarrolla el potencial artístico de tu hijo(a) y explota toda su creatividad de la mano con las mejores técnicas de dibujo y pintura.',
    imagen: ['pintura1.jpeg', 'pintura2.jpeg', 'pintura3.jpeg'],
    icono: 'palette.svg',
  },
  {
    nombre: 'Experimentos',
    descripcion: 'Nuestro taller es 100% práctico, en él los niños realizan experimentos, aprendiendo el lado asombroso y divertido de la ciencia, sus conceptos básicos y más.',
    imagen: [],
    icono: 'science.svg',
  },
  /*{
    nombre: 'Guitarra',
    descripcion: 'Brindale a tu hijo(a) la oportunidad de aprender a tocar guitarra de una manera fácil, rápida y divertida, utilizando técnicas, escalas y acordes.',
    imagen: ['guitarra1.jpg', 'guitarra2.jpg'],
    icono: 'guitar.svg',
  },
  {
    nombre: 'Inglés',
    descripcion: 'Refuérzalo con nosotros y aprenderá de manera fácil, dinámica y entendible con profesores bilingües de primer nivel.',
    imagen: ['ingles1.jpg', 'ingles2.jpg'],
    icono: 'english.svg',
  },*/
  {
    nombre: 'Karate',
    descripcion: 'Potencia la energía física de tu hijo(a) y desarrolla su autoestima y autocontrol mediante técnicas, movimientos y estrategias.',
    imagen: ['karate1.jpeg'],
    icono: 'karate.svg',
  },
  /*{
    nombre: 'Marinera',
    descripcion: 'Que el pañuelo y el zapateo a ritmo de cajón peruano hagan vibrar a tu hijo(a) y liberarse del estrés, aprendiendo con los mejores profesores.',
    imagen: ['marinera1.jpg', 'marinera2.jpg'],
    icono: 'dance-traditional.svg',
  }*/
  {
    nombre: 'Matemática',
    descripcion: 'Refuérzalo con nosotros y aprenderá de forma práctica desde operaciones elementales hasta los problemas más difíciles.',
    imagen: ['matematica1.jpeg'],
    icono: 'math.svg',
  },
  {
    nombre: 'Minichef',
    descripcion: 'Dale a tu hijo(a) la oportunidad de aprender con nosotros las mejores técnicas culinarias como jugando, de forma fácil y divertida.',
    imagen: ['cocina1.jpeg', 'cocina2.jpeg', 'cocina3.jpeg'],
    icono: 'chef.svg',
  },
  {
    nombre: 'Oratoria',
    descripcion: 'En nuestro taller le brindaremos a tu hijo(a) las técnicas y herramientas que necesita para poder vencer la timidez, ganar confianza y seguridad.',
    imagen: [],
    icono: 'speech.svg',
  },
  /*{
    nombre: 'Órgano',
    descripcion: 'En nuestro taller tu hijo(a) se expresará a través del sonido de las teclas y liberará todo su potencial artístico de forma práctica y didáctica.',
    imagen: ['organo1.jpg', 'organo2.jpg'],
    icono: 'keyboard.svg',
  }*/
  {
    nombre: 'Robótica',
    descripcion: 'Los alumnos aprenderán a armar proyectos de robótica con kits de lego NXT, a la par que aprenderán principios básicos de física e ingeniería.',
    imagen: ['robotica1.jpeg', 'robotica2.jpeg', 'robotica3.jpeg', 'robotica4.jpeg'],
    icono: 'robot.svg',
  }
  /*{
    nombre: 'Teatro',
    descripcion: 'Nuestro taller es 100% práctico, en él los niños interpretarán su propio personaje, desarrollando la mejor versión de sí mismos de forma divertida.',
    imagen: ['teatro1.jpg', 'teatro2.jpg'],
    icono: 'theater.svg',
  }*/
];

  constructor() {}
  
  getActivities(): ActivityModel[] {
    return this.activities;
  }
}
