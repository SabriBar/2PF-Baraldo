import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarInscripcionComponent } from './components/abm-inscripcion/agregar-inscripcion/agregar-inscripcion.component';
import { ModificarInscripcionComponent } from './components/abm-inscripcion/modificar-inscripcion/modificar-inscripcion.component';
import { ListaInscripcionComponent } from './components/lista-inscripcion/lista-inscripcion.component';

const routes: Routes = [
  {path:'inscripciones', component: ListaInscripcionComponent},
  {path:'agregar-inscripcion', component: AgregarInscripcionComponent},
  {path:'edit-inscripcion', component: ModificarInscripcionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscripcionesRoutingModule { }
