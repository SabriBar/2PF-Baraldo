import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AbmService } from 'src/app/inscripciones/service/abm.service';
import { Inscripcion } from 'src/app/shared/models/inscripcion';

@Component({
  selector: 'app-modificar-inscripcion',
  templateUrl: './modificar-inscripcion.component.html',
  styleUrls: ['./modificar-inscripcion.component.css']
})
export class ModificarInscripcionComponent implements OnInit {

  form!: FormGroup;
  curso: any[] = ['Angular', 'Javascript', 'Python', 'Diseño UX', 'SQL'];


  constructor(
    private abmService: AbmService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros) => {
      console.log(parametros);
      this.form = new FormGroup({
        id: new FormControl(parametros.get('id'), Validators.required),
        curso: new FormControl(parametros.get('curso.nombre'), Validators.required),
        comision: new FormControl(parametros.get('comision'), Validators.required),
        alumnoNombre: new FormControl(parametros.get('alumnoNombre.nombre'), Validators.required),
        alumnoApellido: new FormControl(parametros.get('alumnoApellido.apellido'), Validators.required),
        profesor: new FormControl(parametros.get('profesor.nombre'), Validators.required),
      })
    })
  }

  editInscripcion() {
    let element: Inscripcion = {
      id: this.form.value.id,
      curso: {
        nombre: this.form.value.curso,
        comision: '100',
        imagen: './../../../../sql.jpeg',
        profesor: {
          nombre: 'Minerva',
          correo: 'minerva@gmail.com'
        },
        inscripcionAbierta: 'Abierta'
      },
      comision: this.form.value.comision,
      alumno: {
        nombre: this.form.value.alumnoNombre,
        apellido: this.form.value.alumnoApellido,
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
        nombre: this.form.value.profesor,
        correo: 'minerva@gmail.com'
      }
    }

    this.abmService.editInscripcion(element);
    this.router.navigate(['/inscripciones'])

    this.snackBar.open('  Inscripcion modificada correctamente', '', {
      duration: 1500,
      horizontalPosition: 'left',
      verticalPosition: 'bottom'
    })
  }

}
