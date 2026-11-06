import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pelicula } from '../models/pelicula.interface';
import { PeliculasService } from '../services/peliculas';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
  standalone: false
})
export class DetallePage implements OnInit {

  pelicula?: Pelicula;

  constructor(
    private activatedRoute: ActivatedRoute,
    private peliculasService: PeliculasService,
    private router: Router
  ) {}

  ngOnInit() {
    // 1. Captura el ID de la URL
    const idParam = this.activatedRoute.snapshot.paramMap.get('id');
    if (idParam) {
      // 2. Busca la película en el servicio usando ese ID
      this.pelicula = this.peliculasService.getPeliculaById(Number(idParam));
    }
  }

  // 3. Event Binding para regresar a la lista de películas
  volver() {
    this.router.navigate(['/home']);
  }
}
