import { Injectable } from '@angular/core';
import { Alumno } from 'src/app/shared/models/alumno';
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

  editAlumno(element: Alumno): void{
    let indice = this.alumnosService.alumnos.findIndex((a: Alumno) => a.nombre === element.nombre);

    if(indice > -1){
      this.alumnosService.alumnos[indice] = element;
      this.alumnosService.alumnos$.next(this.alumnosService.alumnos);
    }
  }

  deleteAlumno(index: number){
    this.alumnosService.alumnos.splice(index, 1);
    this.alumnosService.alumnos$.next(this.alumnosService.alumnos);
  }

}
