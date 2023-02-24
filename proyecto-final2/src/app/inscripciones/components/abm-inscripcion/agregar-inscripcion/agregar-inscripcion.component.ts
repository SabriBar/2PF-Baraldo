import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AbmService } from 'src/app/inscripciones/service/abm.service';
import { Inscripcion } from 'src/app/shared/models/inscripcion';

@Component({
  selector: 'app-agregar-inscripcion',
  templateUrl: './agregar-inscripcion.component.html',
  styleUrls: ['./agregar-inscripcion.component.css']
})
export class AgregarInscripcionComponent implements OnInit {

  form: FormGroup;
  curso: any[] = ['Angular', 'Javascript', 'Python', 'Diseño UX', 'SQL'];


  constructor(
    private fb: FormBuilder,
    private abmService: AbmService,
    private router: Router,
    private snackBar: MatSnackBar) {

    this.form = this.fb.group({
      numero: new FormControl('', Validators.required),
      curso: new FormControl('', Validators.required),
      comision: new FormControl('', Validators.required),
      alumno: new FormControl('', Validators.required),
      profesor: new FormControl('', Validators.required,)
    })


  }

  ngOnInit(): void {
  }

  createInscripcion() {
    let inscripcion: Inscripcion = {
      id: this.form.value.numero,
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
        nombre: this.form.value.alumno,
        apellido: 'Sanchez',
        curso: {
          nombre: 'Javascript',
          comision: '101',
          imagen: './../../../../assets/javascript.jpeg',
          profesor: {
            nombre: 'Garrison',
            correo: 'mrGarrison@gmail.com'
          },
          inscripcionAbierta: 'Abierta'
        },
        comision: 101,
        email: 'pepesanchez@gmail.com'
      },
      profesor: {
        nombre: this.form.value.profesor,
        correo: 'mrGarrison@gmail.com'
      }
    }

    this.abmService.createInscripcion(inscripcion);
    this.router.navigate(['/inscripciones']);

    this.snackBar.open('  Inscripcion creado correctamente', '', {
      duration: 1500,
      horizontalPosition: 'left',
      verticalPosition: 'bottom'
    })
  }

}
