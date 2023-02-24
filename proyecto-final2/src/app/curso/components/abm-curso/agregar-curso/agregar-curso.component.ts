import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AbmService } from 'src/app/curso/services/abm.service';
import { Curso } from 'src/app/shared/models/curso';

@Component({
  selector: 'app-agregar-curso',
  templateUrl: './agregar-curso.component.html',
  styleUrls: ['./agregar-curso.component.css']
})
export class AgregarCursoComponent implements OnInit {
  form!: FormGroup;
  inscripcion: any[] = ['Abierta', 'Cerrada'];

  constructor(
    private fb: FormBuilder,
    private abmService: AbmService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.form = this.fb.group({
      nombre: new FormControl('', Validators.required),
      comision: new FormControl('', Validators.required),
      profesor: new FormControl('', Validators.required),
      inscripcionAbierta: new FormControl('', Validators.required)
    })
   }

  ngOnInit(): void {

  }

  createCurso() {
    let curso: Curso = {
      nombre: this.form.value.nombre,
      comision: this.form.value.comision,
      imagen: './../../../../assets/nuevoCurso.jpeg',
      profesor: {
        nombre: this.form.value.profesor,
        correo: 'minerva@gmail.com'
      },
      inscripcionAbierta: this.form.value.inscripcionAbierta
    }

    this.abmService.createCurso(curso);
    this.router.navigate(['cursos']);

    this.snackBar.open('  Curso creado correctamente', '', {
      duration: 1500,
      horizontalPosition: 'left',
      verticalPosition: 'bottom'
    })
  }

}
