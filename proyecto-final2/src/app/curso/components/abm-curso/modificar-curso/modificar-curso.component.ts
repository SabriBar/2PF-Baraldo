import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AbmService } from 'src/app/curso/services/abm.service';
import { Curso } from 'src/app/shared/models/curso';

@Component({
  selector: 'app-modificar-curso',
  templateUrl: './modificar-curso.component.html',
  styleUrls: ['./modificar-curso.component.css']
})
export class ModificarCursoComponent implements OnInit {
  form!: FormGroup;
  inscripcion: any[] = ['Abierta', 'Cerrada'];

  constructor(
    private abmService: AbmService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros) => {
      console.log(parametros);

      this.form = new FormGroup({
        nombre: new FormControl(parametros.get('nombre'), Validators.required),
        comision: new FormControl(parametros.get('comision'), Validators.required),
        profesor: new FormControl(parametros.get('profesor.nombre'), Validators.required),
        inscripcionAbierta: new FormControl(parametros.get('inscripcionAbierta'), Validators.required)
      })
    })
  }

  editCurso() {
    let curso: Curso = {
      nombre: this.form.value.nombre,
      comision: this.form.value.comision,
      imagen: './../../../../assets/cursoEditado.png',
      profesor: {
        nombre: this.form.value.profesor,
        correo: 'minerva@gmail.com'
      },
      inscripcionAbierta: this.form.value.inscripcionAbierta
    }

    this.abmService.editCurso(curso);
    this.router.navigate(['cursos']);

    this.snackBar.open('  Curso modificado correctamente', '', {
      duration: 1500,
      horizontalPosition: 'left',
      verticalPosition: 'bottom'
    })
  }

}
