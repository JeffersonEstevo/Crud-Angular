import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Tarefa } from './../model/tarefa';
import { TarefasService } from './../services/tarefas.service';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.scss']
})
export class TarefasComponent implements OnInit {

  // podemos criar a tarefa assim, ou no construtor abaixo   // Tarefa[] = [];
  tarefas: Observable<Tarefa[]>;
    //[ {_id: 1, titulo : 'Limpar quarto', descricao: 'Dar a geral no quarto', responsavel: 'Jefferson',
    //prioridade: 'Alta', data: '08/05/2022' }  ];

  displayedColumns = ['titulo', 'descricao', 'responsavel', 'prioridade', 'data'];

  //tarefasService: TarefasService;


  constructor(private tarefasService: TarefasService) {
    // this.tarefas = [];
    // this.tarefasService = new TarefasService();
     this.tarefas = this.tarefasService.list();
  }

  ngOnInit(): void {
    // this.tarefas = this.tarefasService.list();
    //
  }

}
