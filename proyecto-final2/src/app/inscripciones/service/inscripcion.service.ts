import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Inscripcion } from 'src/app/shared/models/inscripcion';

@Injectable({
  providedIn: 'root'
})
export class InscripcionService {

  public inscripciones: Inscripcion[] = [
    {
      id: 1,
      curso: {
        nombre: 'Angular',
        comision: '100',
        imagen: './../../../../assets/angular.jpg',
        profesor: {
          nombre: 'Minerva',
          correo: 'minerva@gmail.com'
        },
        inscripcionAbierta: ''
      },
      comision: 100,
      alumno: {
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
      profesor: {
        nombre: 'Minerva',
        correo: 'minerva@gmail.com'
      }
    },

    {
      id: 2,
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
      alumno: {
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
      profesor: {
        nombre: 'Garrison',
        correo: 'mrGarrison@gmail.com'
      }
    },

    {
      id: 3,
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
      alumno: {
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
      profesor: {
        nombre: 'Walter',
        correo: 'walterwh@gmail.com'
      }
    },
    {
      id: 4,
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
      alumno: {
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
      profesor: {
        nombre: 'Albus',
        correo: 'albus@gmail.com'
      }
    },
    {
      id: 5,
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
      alumno: {
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
      profesor: {
        nombre: 'Minerva',
        correo: 'minerva@gmail.com'
      }
    },
    {
      id: 6,
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
      alumno: {
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
      profesor: {
        nombre: 'Indiana',
        correo: 'indianaj@gmail.com'
      }
    },
    {
      id: 7,
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
      alumno: {
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
      },
      profesor: {
        nombre: 'Garrison',
        correo: 'mrGarrison@gmail.com'
      }
    }
    
  ];
  public inscripciones$!: BehaviorSubject<Inscripcion[]>;


  constructor() {
    this.inscripciones$ = new BehaviorSubject(this.inscripciones);

  }

  getInscripcionesObservable(): Observable<Inscripcion[]> {
    return this.inscripciones$.asObservable();
  }
  
}
