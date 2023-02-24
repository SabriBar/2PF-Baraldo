import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarComponent } from '../core/components/navbar/navbar.component';
import { ToolbarComponent } from '../core/components/toolbar/toolbar.component';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [
    NotFoundComponent,
    NavbarComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ], exports: [
    NavbarComponent,
    ToolbarComponent
  ]
})
export class CoreModule { }
