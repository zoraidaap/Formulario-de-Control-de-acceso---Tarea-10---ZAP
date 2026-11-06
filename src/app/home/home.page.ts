import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pelicula } from '../models/pelicula.interface';
import { PeliculasService } from '../services/peliculas';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false
})
export class HomePage implements OnInit {

  listaPeliculas: Pelicula[] = [];

  constructor(
    private peliculasService: PeliculasService,
    private router: Router
  ) {}

  ngOnInit() {
    this.obtenerCatalogo();
  }

  // Inyección y consumo del servicio
  obtenerCatalogo() {
    this.listaPeliculas = this.peliculasService.getPeliculas();
  }

  // Event Binding para navegar pasando el ID de la película
  verDetalle(id: number) {
    this.router.navigate(['/detalle', id]);
  }
}
