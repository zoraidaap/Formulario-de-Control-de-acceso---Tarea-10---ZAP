import { Injectable } from '@angular/core';
import { Pelicula } from '../models/pelicula.interface';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  // Array de películas solicitado en el examen
  private peliculas: Pelicula[] = [
    {
      id: 1,
      titulo: 'Interestelar',
      genero: 'Ciencia ficción',
      anio: 2014,
      duracion: 169,
      director: 'Christopher Nolan',
      descripcion: 'Un grupo de astronautas viaja a través de un agujero de gusano en búsqueda de un nuevo hogar.',
      disponible: true
    },
    {
      id: 2,
      titulo: 'Matrix',
      genero: 'Ciencia ficción',
      anio: 1999,
      duracion: 136,
      director: 'Lana y Lilly Wachowski',
      descripcion: 'Un programador descubre una realidad diferente.',
      disponible: true
    }
  ];

  constructor() { }

  // Método 1: Recuperar todas las películas
  getPeliculas(): Pelicula[] {
    return this.peliculas;
  }

  // Método 2: Buscar una película utilizando su ID
  getPeliculaById(id: number): Pelicula | undefined {
    return this.peliculas.find(p => p.id === id);
  }
}