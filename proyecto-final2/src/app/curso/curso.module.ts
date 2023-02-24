import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardCursoComponent } from './components/card-curso/card-curso.component';
import { MaterialModule } from '../material.module';
import { CursoRoutingModule } from './curso-routing.module';
import { RouterModule } from '@angular/router';
import { AgregarCursoComponent } from './components/abm-curso/agregar-curso/agregar-curso.component';
import { ModificarCursoComponent } from './components/abm-curso/modificar-curso/modificar-curso.component';
import { BooleanTransformPipe } from './pipes/boolean-transform.pipe';
import { FechaPipe } from './pipes/fecha.pipe';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CardCursoComponent,
    AgregarCursoComponent,
    ModificarCursoComponent,
    BooleanTransformPipe,
    FechaPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
    CursoRoutingModule
  ],
  exports: [
    CardCursoComponent
  ]
})
export class CursoModule { }
