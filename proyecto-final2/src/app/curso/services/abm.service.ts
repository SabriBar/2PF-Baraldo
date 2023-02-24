import { Injectable } from '@angular/core';
import { Curso } from 'src/app/shared/models/curso';
import { CursosService } from './cursos.service';

@Injectable({
  providedIn: 'root'
})
export class AbmService {

  constructor(
    private cursosService: CursosService
  ) { }

  createCurso(curso: Curso) {
    this.cursosService.cursos.unshift(curso);
  }

  editCurso(curso: Curso): void{
    let indice = this.cursosService.cursos.findIndex((c: Curso) => c.comision === curso.comision);

    if(indice > -1){
      this.cursosService.cursos[indice] = curso;
      this.cursosService.cursos$.next(this.cursosService.cursos);
    }
  }

  deleteCurso(curso: Curso): void {
    let indice = this.cursosService.cursos.findIndex((c: Curso) => c.comision === curso.comision);

    if (indice > -1) {
      this.cursosService.cursos.splice(indice, 1);
      this.cursosService.cursos$.next(this.cursosService.cursos);
    }
  }
}

