import { Injectable } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';
import { AlumnosService } from './alumnos.service';

@Injectable({
  providedIn: 'root'
})
export class AbmService {
  

  constructor(
    private alumnosService: AlumnosService
  ) { }

  createAlumno(alumno: Alumno){
    this.alumnosService.alumnos.unshift(alumno);
  }

  editAlumno(alumno: Alumno): void{
    this.alumnosService.alumnos.unshift(alumno);
  }

  deleteAlumno(index: number){
    this.alumnosService.alumnos.splice(index, 1);
    this.alumnosService.alumnos$.next(this.alumnosService.alumnos);
  }

}
