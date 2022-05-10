import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarefaFormComponent } from './tarefa-form/tarefa-form.component';

import { TarefasComponent } from './tarefas/tarefas.component';

const routes: Routes = [
  { path: '', component: TarefasComponent },
  { path: 'new', component: TarefaFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TarefasRoutingModule { }
