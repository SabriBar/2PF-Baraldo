import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AbmService } from 'src/app/curso/services/abm.service';
import { Curso } from 'src/app/models/curso';

@Component({
  selector: 'app-modificar-curso',
  templateUrl: './modificar-curso.component.html',
  styleUrls: ['./modificar-curso.component.css']
})
export class ModificarCursoComponent implements OnInit {
  form!: FormGroup;
  inscripcion: any[] = ['Abierta', 'Cerrada'];

  constructor(
    private fb: FormBuilder,
    private abmService: AbmService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
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

  editCurso() {
    let curso: Curso = {
      nombre: this.form.value.nombre,
      comision: this.form.value.comision,
      imagen: './../../../../assets/cursoEditado.jpeg',
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
