import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AbmService } from 'src/app/alumno/services/abm.service';
import { Alumno } from 'src/app/models/alumno';

@Component({
  selector: 'app-modificar-alumno',
  templateUrl: './modificar-alumno.component.html',
  styleUrls: ['./modificar-alumno.component.css']
})
export class ModificarAlumnoComponent implements OnInit {
  formulario!: FormGroup;
  curso: any[] = ['Angular','Javascript','Python','Diseño UX','SQL'];

  constructor(
    private fb: FormBuilder,
    private abmService: AbmService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros) => {
      console.log(parametros);
      let regexCorreo: string = '^[^@]+@[^@]+\.[a-zA-Z]{2,}$';
      this.formulario = new FormGroup({
        nombre: new FormControl(parametros.get('nombre'), Validators.required),
        apellido: new FormControl(parametros.get('apellido'), Validators.required),
        curso: new FormControl(parametros.get('curso'), Validators.required),
        comision: new FormControl(parametros.get('comision'), Validators.required),
        email: new FormControl(parametros.get('email'), [Validators.required, Validators.pattern(regexCorreo)])
      })
    })
  }

  editAlumno() {
    let alumno: Alumno = {
      nombre: this.formulario.value.nombre,
      apellido: this.formulario.value.apellido,
      curso: {
        nombre: this.formulario.value.curso,
        comision: '100',
        imagen: './../../../../sql.jpeg',
        profesor: {
          nombre: 'Minerva',
          correo: 'minerva@gmail.com'
        },
        inscripcionAbierta: true
      },
      comision: this.formulario.value.comision,
      email: this.formulario.value.email
    }

    this.abmService.editAlumno(alumno);
    this.router.navigate([''])

    this.snackBar.open('  Alumno modificado correctamente', '', {
      duration: 1500,
      horizontalPosition: 'left',
      verticalPosition: 'bottom'
    })
  }

}


