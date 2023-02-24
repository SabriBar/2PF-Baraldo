import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaAlumnoComponent } from './alumno/components/lista-alumno/lista-alumno.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';

const appRoutes: Routes = [
  {path:'', component: ListaAlumnoComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
