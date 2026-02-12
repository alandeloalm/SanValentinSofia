import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portada',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portada.html',
  styleUrl: './portada.css',
})
export class Portada implements OnInit {
  loading = true;
  fadingOut = false;
  progreso = 0;
  botonesInvertidos = false;
  mensajeActual = 'Iniciando nuestra historia...'; // Mensaje inicial

  fotos = [
    'foto1.jpeg', 'foto2.jpeg', 'foto3.jpeg', 
    'foto4.jpeg', 'foto5.jpeg', 'foto6.jpeg',
    'foto7.jpeg', 'foto8.jpeg'
  ];

  constructor(private router: Router, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.iniciarCarga();
  }

  iniciarCarga() {
    // Cambiamos a 80ms para que sea más lento y disfrutable
    const intervalo = setInterval(() => {
      if (this.progreso < 99) {
        this.progreso++;
        this.actualizarMensaje(); // Llamamos a la función para cambiar el texto
      } else {
        clearInterval(intervalo);
        this.mensajeActual = 'Todo listo danielsss... ❤️';
        setTimeout(() => {
          this.progreso = 100;
          this.finalizarCarga();
        }, 1500); // Pausa extra en el 99% para leer el último mensaje
      }
      this.cdr.detectChanges();
    }, 80); 
  }

  // Lógica para cambiar los mensajes según el progreso
  actualizarMensaje() {
    if (this.progreso < 20) {
      this.mensajeActual = 'Cargando noches de buldak...';
    } else if (this.progreso < 40) {
      this.mensajeActual = 'Preparando latte de soya lleno de amor...';
    } else if (this.progreso < 60) {
      this.mensajeActual = 'Esperando a que se levante la gorda...';
    } else if (this.progreso < 80) {
      this.mensajeActual = 'Pensando mil formas de hacerte feliz...';
    } else if (this.progreso < 95) {
      this.mensajeActual = 'Formulando la pregunta...';
    }
  }

  finalizarCarga() {
    setTimeout(() => {
      this.fadingOut = true;
      this.cdr.detectChanges();
      setTimeout(() => {
        this.loading = false;
        this.cdr.detectChanges();
      }, 800);
    }, 500);
  }

  intercambiar() { this.botonesInvertidos = !this.botonesInvertidos; }
  
  aceptar() {
    localStorage.setItem('sanValentinAceptado', 'true');
    this.router.navigate(['/timeline']);
  }
}