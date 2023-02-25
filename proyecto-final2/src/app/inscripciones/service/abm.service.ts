import { Injectable } from '@angular/core';
import { Inscripcion } from 'src/app/shared/models/inscripcion';
import { InscripcionService } from './inscripcion.service';

@Injectable({
  providedIn: 'root'
})
export class AbmService {

  constructor(
    private inscripcionService: InscripcionService
  ) { }

  createInscripcion(inscripcion: Inscripcion){
    this.inscripcionService.inscripciones.unshift(inscripcion);
  }

  editInscripcion(element: Inscripcion): void{
    let indice = this.inscripcionService.inscripciones.findIndex((i: Inscripcion) => i.curso.profesor.correo === element.curso.profesor.correo);

    if(indice > -1){
      this.inscripcionService.inscripciones[indice] = element;
      this.inscripcionService.inscripciones$.next(this.inscripcionService.inscripciones);
    }
  }

  deleteInscripcion(index: number){
    this.inscripcionService.inscripciones.splice(index, 1);
    this.inscripcionService.inscripciones$.next(this.inscripcionService.inscripciones);
  }
}
