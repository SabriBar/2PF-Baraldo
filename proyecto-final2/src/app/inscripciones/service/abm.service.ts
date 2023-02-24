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

  editInscripcion(inscripcion: Inscripcion): void{
    this.inscripcionService.inscripciones.unshift(inscripcion);
  }

  deleteInscripcion(index: number){
    this.inscripcionService.inscripciones.splice(index, 1);
    this.inscripcionService.inscripciones$.next(this.inscripcionService.inscripciones);
  }
}
