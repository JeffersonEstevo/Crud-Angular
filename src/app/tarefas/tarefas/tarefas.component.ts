import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';

import { Tarefa } from './../model/tarefa';
import { TarefasService } from './../services/tarefas.service';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.scss']
})
export class TarefasComponent implements OnInit {

  // podemos criar a tarefa assim, ou no construtor abaixo   // Tarefa[] = [];
  tarefas$: Observable<Tarefa[]>;
    //[ {_id: 1, titulo : 'Limpar quarto', descricao: 'Dar a geral no quarto', responsavel: 'Jefferson',
    //prioridade: 'Alta', data: '08/05/2022' }  ];

  displayedColumns = ['titulo', 'descricao', 'responsavel', 'prioridade', 'data', 'acoes'];

  //tarefasService: TarefasService;


  constructor(
      private tarefasService: TarefasService,
      public dialog: MatDialog,
      private router: Router,
      private route: ActivatedRoute
    ) {
    // this.tarefas = [];
    // this.tarefasService = new TarefasService();
     this.tarefas$ = this.tarefasService.list().pipe(
      // tratando errros
      catchError(error => {
        //console.log(error);
        this.onError('Erro ao carregar tarefas.')
        return of([])
       })
     );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {
    // this.tarefas = this.tarefasService.list();
  }

  onAdd(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
