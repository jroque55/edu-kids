import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Home } from './home/home';
import { Info } from './info/info';
import { Footer } from './footer/footer';
import { Ubicacion } from './components/ubicacion/ubicacion';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Home, Info, Footer, Ubicacion],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('edukids');
}
