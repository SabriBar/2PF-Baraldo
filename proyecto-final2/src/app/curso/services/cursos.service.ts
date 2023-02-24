import { Injectable } from '@angular/core';
import { url } from 'inspector';
import { BehaviorSubject, Observable } from 'rxjs';
import { Curso } from 'src/app/shared/models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  public cursos: Curso[] = [
    {
      nombre: 'Angular',
      comision: '100',
      imagen: './../../../../assets/angular.jpg',
      profesor: {
        nombre: 'Minerva',
        correo: 'minerva@gmail.com'
      },
      inscripcionAbierta: 'Abierta'
    },
    {
      nombre: 'Javascript', 
      comision: '101',
      imagen: './../../../../assets/javascript.jpeg', 
      profesor: {
        nombre: 'Garrison',
        correo: 'mrGarrison@gmail.com'
      },
      inscripcionAbierta: 'Cerrada'
    },
    {
      nombre: 'Python', 
      comision: '103',
      imagen: './../../../../assets/python.jpg', 
      profesor: {
        nombre: 'Walter',
        correo: 'walterwh@gmail.com'
      },
      inscripcionAbierta: 'Abierta'
    },
    {
      nombre: 'Diseño UX', 
      comision: '105',
      imagen: './../../../../assets/diseño.jpg', 
      profesor: {
        nombre: 'Albus',
        correo: 'albus@gmail.com'
      },
      inscripcionAbierta: 'Cerrada'
    },
    {
      nombre: 'SQL', 
      comision: '108',
      imagen: './../../../../assets/sql.jpeg', 
      profesor: {
        nombre: 'Indiana',
        correo: 'indianaj@gmail.com'
      },
      inscripcionAbierta: 'Cerrada'
    }
  ];
  public cursos$!: BehaviorSubject<Curso[]>;


  constructor() {
    this.cursos$ = new BehaviorSubject(this.cursos);
  }

  obtenerCursosObservable(): Observable<Curso[]>{
    return this.cursos$.asObservable();
  }

}
