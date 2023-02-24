import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaAlumnoComponent } from './components/lista-alumno/lista-alumno.component';
import { MaterialModule } from '../material.module';
import { ModificarAlumnoComponent } from './components/abm-alumno/modificar-alumno/modificar-alumno.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UsernamePipe } from './pipes/username.pipe';
import { TituloEstiloDirective } from './directives/titulo-estilo.directive';
import { AgregarAlumnoComponent } from './components/abm-alumno/agregar-alumno/agregar-alumno.component';
import { RouterModule } from '@angular/router';
import { AlumnoRoutingModule } from './alumno-routing.module';

@NgModule({
  declarations: [
    ListaAlumnoComponent,
    ModificarAlumnoComponent,
    UsernamePipe,
    TituloEstiloDirective,
    AgregarAlumnoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule,
    AlumnoRoutingModule
  ],
  exports: [
    ListaAlumnoComponent
  ]
})
export class AlumnoModule { }