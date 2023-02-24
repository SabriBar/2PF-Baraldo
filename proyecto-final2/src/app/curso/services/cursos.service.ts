import { Injectable } from '@angular/core';
import { url } from 'inspector';
import { BehaviorSubject, Observable } from 'rxjs';
import { Curso } from 'src/app/models/curso';

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
      inscripcionAbierta: true
    },
    {
      nombre: 'Javascript', 
      comision: '101',
      imagen: './../../../../assets/javascript.jpeg', 
      profesor: {
        nombre: 'Garrison',
        correo: 'mrGarrison@gmail.com'
      },
      inscripcionAbierta: false
    },
    {
      nombre: 'Python', 
      comision: '103',
      imagen: './../../../../assets/python.jpg', 
      profesor: {
        nombre: 'Walter',
        correo: 'walterwh@gmail.com'
      },
      inscripcionAbierta: true
    },
    {
      nombre: 'Diseño UX', 
      comision: '105',
      imagen: './../../../../assets/diseño.jpg', 
      profesor: {
        nombre: 'Albus',
        correo: 'albus@gmail.com'
      },
      inscripcionAbierta: false
    },
    {
      nombre: 'SQL', 
      comision: '108',
      imagen: './../../../../assets/sql.jpeg', 
      profesor: {
        nombre: 'Indiana',
        correo: 'indianaj@gmail.com'
      },
      inscripcionAbierta: false
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
