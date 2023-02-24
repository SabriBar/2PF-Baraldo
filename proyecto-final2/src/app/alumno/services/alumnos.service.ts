import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of } from 'rxjs';
import { Alumno } from 'src/app/shared/models/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  public alumnos: Alumno[] = [
    {
      nombre: 'Juan',
      apellido: 'Rodriguez',
      curso: {
        nombre: 'Angular',
        comision: '100',
        imagen: './../../../../assets/angular.jpg',
        profesor: {
          nombre: 'Minerva',
          correo: 'minerva@gmail.com'
        },
        inscripcionAbierta: 'Abierta'
      },
      comision: 100, email: 'juanrodri@gmail.com'
    },

    {
      nombre: 'Mario',
      apellido: 'Garcia',
      curso: {
        nombre: 'Javascript',
        comision: '101',
        imagen: './../../../../assets/javascript.jpeg', 
        profesor: {
          nombre: 'Garrison',
          correo: 'mrGarrison@gmail.com'
        },
        inscripcionAbierta: 'Cerrada'
      },
      comision: 101, email: 'garcia_mario@gmail.com'
    },

    {
      nombre: 'Ana',
      apellido: 'Lopez',
      curso: {
        nombre: 'Python',
        comision: '103',
        imagen: './../../../../assets/python.jpg',
        profesor: {
          nombre: 'Walter',
          correo: 'walterwh@gmail.com'
        },
        inscripcionAbierta: 'Abierta'
      },
      comision: 103,
      email: 'ana1lopez@gmail.com'
    },
    {
      nombre: 'Carlos',
      apellido: 'Martinez',
      curso: {
        nombre: 'Diseño UX',
        comision: '105',
        imagen: './../../../../assets/diseño.jpg',
        profesor: {
          nombre: 'Albus',
          correo: 'albus@gmail.com'
        },
        inscripcionAbierta: 'Cerrada'
      },
      comision: 105,
      email: 'carlistosm@gmail.com'
    },
    {
      nombre: 'Jose',
      apellido: 'Hernandez',
      curso: {
        nombre: 'Angular',
        comision: '100',
        imagen: './../../../../assets/angular.jpg',
        profesor: {
          nombre: 'Minerva',
          correo: 'minerva@gmail.com'
        },
        inscripcionAbierta: 'Abierta'
      },
      comision: 100,
      email: 'josehernandez@gmail.com'
    },
    {
      nombre: 'Laura',
      apellido: 'Perez',
      curso: {
        nombre: 'SQL',
        comision: '108',
        imagen: './../../../../sql.jpeg',
        profesor: {
          nombre: 'Indiana',
          correo: 'indianaj@gmail.com'
        },
        inscripcionAbierta: 'Cerrada'
      },
      comision: 108,
      email: 'lauperez@gmail.com'
    },
    {
      nombre: 'Pedro',
      apellido: 'Sanchez',
      curso: {
        nombre: 'Javascript',
        comision: '101',
        imagen: './../../../../assets/javascript.jpeg', 
        profesor: {
          nombre: 'Garrison',
          correo: 'mrGarrison@gmail.com'
        },
        inscripcionAbierta: 'Cerrada'
      },
      comision: 101,
      email: 'pepesanchez@gmail.com'
    }
  ];
  public alumnos$!: BehaviorSubject<Alumno[]>;


  constructor() {
    this.alumnos$ = new BehaviorSubject(this.alumnos);

  }

  getAlumnosObservable(): Observable<Alumno[]> {
    return this.alumnos$.asObservable();
  }

}
