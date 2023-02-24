import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaAlumnoComponent } from './alumno/components/lista-alumno/lista-alumno.component';

const appRoutes: Routes = [
  {path:'', component: ListaAlumnoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
