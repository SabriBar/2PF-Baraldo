import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarAlumnoComponent } from './components/abm-alumno/agregar-alumno/agregar-alumno.component';
import { ModificarAlumnoComponent } from './components/abm-alumno/modificar-alumno/modificar-alumno.component';

const routes: Routes = [
  {path: 'agregar-alumno', component: AgregarAlumnoComponent},
  {path: 'edit-alumno', component: ModificarAlumnoComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})
export class AlumnoRoutingModule { }
