import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  palabraSecreta: string = 'ANGULAR';
  palabraOculta: string[] = [];
  intentos: number = 6;
  letrasIncorrectas: string[] = [];
  letraIngresada: string = '';
  juegoTerminado: boolean = false;
  mensajeResultado: string = '';
  constructor() {
    this.iniciarJuego();
  }

  iniciarJuego() {
    this.palabraOculta = Array(this.palabraSecreta.length).fill('_');
  }

  adivinarLetra() {
    if (this.letraIngresada.length === 0 || this.juegoTerminado) return;

    const letra = this.letraIngresada.toUpperCase();
    this.letraIngresada = '';

    if (this.palabraSecreta.includes(letra)) {
      for (let i = 0; i < this.palabraSecreta.length; i++) {
        if (this.palabraSecreta[i] === letra) {
          this.palabraOculta[i] = letra;
        }
      }
      this.verificarVictoria();
    } else {
      if (!this.letrasIncorrectas.includes(letra)) {
        this.letrasIncorrectas.push(letra);
        this.intentos--;
      }
      this.verificarDerrota();
    }
  }

  verificarVictoria() {
    if (!this.palabraOculta.includes('_')) {
      this.juegoTerminado = true;
      this.mensajeResultado = '¡Ganaste!';
    }
  }

  verificarDerrota() {
    if (this.intentos <= 0) {
      this.juegoTerminado = true;
      this.mensajeResultado = `Perdiste! La palabra era: ${this.palabraSecreta}`;
      this.palabraOculta = this.palabraSecreta.split('');
    }
  }
}
