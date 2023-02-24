import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardCursoComponent } from './components/card-curso/card-curso.component';
import { MaterialModule } from '../material.module';
import { CursoRoutingModule } from './curso-routing.module';
import { RouterModule } from '@angular/router';
import { AgregarCursoComponent } from './components/abm-curso/agregar-curso/agregar-curso.component';
import { ModificarCursoComponent } from './components/abm-curso/modificar-curso/modificar-curso.component';
import { BooleanTransformPipe } from './pipes/boolean-transform.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CardCursoComponent,
    AgregarCursoComponent,
    ModificarCursoComponent,
    BooleanTransformPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    CursoRoutingModule
  ],
  exports: [
    CardCursoComponent
  ]
})
export class CursoModule { }
