import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarCursoComponent } from './components/abm-curso/agregar-curso/agregar-curso.component';
import { ModificarCursoComponent } from './components/abm-curso/modificar-curso/modificar-curso.component';
import { CardCursoComponent } from './components/card-curso/card-curso.component';

const routes: Routes = [
  {path:'cursos', component: CardCursoComponent},
  {path: 'agregar-curso', component: AgregarCursoComponent},
  {path: 'edit-curso', component: ModificarCursoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursoRoutingModule { }
