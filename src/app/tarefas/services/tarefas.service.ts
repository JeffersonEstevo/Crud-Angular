import { Tarefa } from './../model/tarefa';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  constructor(private httpClient: HttpClient) { }

  list(): Tarefa[] {
    return [
      {_id: 1, titulo : 'Limpar quarto', descricao: 'Dar a geral no quarto', responsavel: 'Jefferson',
      prioridade: 'Alta', data: '08/05/2022' }
    ];
  }
}
