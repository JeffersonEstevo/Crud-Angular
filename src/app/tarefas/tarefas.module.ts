import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { SharedModule } from './../shared/shared.module';
import { TarefaFormComponent } from './tarefa-form/tarefa-form.component';
import { TarefasRoutingModule } from './tarefas-routing.module';
import { TarefasComponent } from './tarefas/tarefas.component';



@NgModule({
  declarations: [
    TarefasComponent,
    TarefaFormComponent
  ],
  imports: [
    CommonModule,
    TarefasRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule

  ]
})
export class TarefasModule { }
