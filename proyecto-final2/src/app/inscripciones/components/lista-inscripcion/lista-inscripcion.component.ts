import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Inscripcion } from 'src/app/shared/models/inscripcion';
import { AbmService } from '../../service/abm.service';
import { InscripcionService } from '../../service/inscripcion.service';

@Component({
  selector: 'app-lista-inscripcion',
  templateUrl: './lista-inscripcion.component.html',
  styleUrls: ['./lista-inscripcion.component.css']
})
export class ListaInscripcionComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  dataSource!: MatTableDataSource<Inscripcion>;
  columnas: string[] = ['id', 'curso', 'comision', 'alumno', 'profesor', 'acciones'];
  suscripcion!: Subscription;

  constructor(
    public inscripcionService: InscripcionService,
    private abmService: AbmService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.cargarInscripcion();
  }

  ngOnDestroy(): void {
    if (this.suscripcion) {
      this.suscripcion.unsubscribe();
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  cargarInscripcion() {
    this.dataSource = new MatTableDataSource<Inscripcion>();
    this.inscripcionService.getInscripcionesObservable().subscribe((inscripciones: Inscripcion[]) => {
      this.dataSource.data = inscripciones;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteInscripcion(index: number) {
    this.abmService.deleteInscripcion(index);

    this.snackBar.open('  Inscripcion eliminada correctamente', '', {
      duration: 1500,
      horizontalPosition: 'left',
      verticalPosition: 'bottom'
    })
  }

  redirigirEditInscripcion(element: Inscripcion) {
    this.router.navigate(['/edit-inscripcion', element]);
  }

}
