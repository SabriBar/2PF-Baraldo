import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Alumno } from 'src/app/models/alumno';
import { AbmService } from '../../services/abm.service';
import { AlumnosService } from '../../services/alumnos.service';

@Component({
  selector: 'app-lista-alumno',
  templateUrl: './lista-alumno.component.html',
  styleUrls: ['./lista-alumno.component.css']
})
export class ListaAlumnoComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  dataSource!: MatTableDataSource<Alumno>;
  columnas: string[] = ['usuario', 'curso', 'comision', 'email', 'acciones'];
  suscripcion!: Subscription;

  constructor(
    public alumnoService: AlumnosService,
    private abmService: AbmService,
    private snackBar: MatSnackBar
  ) { }


  ngOnInit(): void {
    this.cargarAlumno();
  }

  ngOnDestroy(): void {
    if (this.suscripcion) {
      this.suscripcion.unsubscribe();
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  cargarAlumno() {
    this.dataSource = new MatTableDataSource<Alumno>();
    this.alumnoService.getAlumnosObservable().subscribe((alumnos: Alumno[]) => {
      this.dataSource.data = alumnos;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteAlumno(index: number) {
    this.abmService.deleteAlumno(index);

    this.snackBar.open('  Alumno eliminado correctamente', '', {
      duration: 1500,
      horizontalPosition: 'left',
      verticalPosition: 'bottom'
    })
  }

}
