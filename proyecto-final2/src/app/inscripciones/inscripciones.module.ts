import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscripcionesRoutingModule } from './inscripciones-routing.module';
import { ListaInscripcionComponent } from './components/lista-inscripcion/lista-inscripcion.component';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { AgregarInscripcionComponent } from './components/abm-inscripcion/agregar-inscripcion/agregar-inscripcion.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListaInscripcionComponent,
    AgregarInscripcionComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InscripcionesRoutingModule,
    MaterialModule,
    SharedModule,
    
  ]
})
export class InscripcionesModule { }
