import { Injectable } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { CursosService } from './cursos.service';

@Injectable({
  providedIn: 'root'
})
export class AbmService {

  constructor(
    private cursosService: CursosService
  ) { }

  createCurso(curso: Curso){
    this.cursosService.cursos.unshift(curso);
  }

  editCurso(curso: Curso): void{
    this.cursosService.cursos.unshift(curso);
  }

  deleteCurso(index: number){
    this.cursosService.cursos.splice(index, 1);
    this.cursosService.cursos$.next(this.cursosService.cursos);
  }

}
