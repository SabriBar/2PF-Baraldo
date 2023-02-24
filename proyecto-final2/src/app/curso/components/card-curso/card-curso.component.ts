import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/models/curso';
import { CursosService } from '../../services/cursos.service';
import { AbmService } from '../../services/abm.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-card-curso',
  templateUrl: './card-curso.component.html',
  styleUrls: ['./card-curso.component.css']
})
export class CardCursoComponent implements OnInit {
  cursos!: Curso[];
  cursos$!: Observable<Curso[]>;

  constructor(
    private cursosService: CursosService,
    private abmService: AbmService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.cursos$ = this.cursosService.obtenerCursosObservable();
  }

  deleteCurso(index: number) {
    this.abmService.deleteCurso(index);

    this.snackBar.open('  Alumno eliminado correctamente', '', {
      duration: 1500,
      horizontalPosition: 'left',
      verticalPosition: 'bottom'
    })
  }

}
