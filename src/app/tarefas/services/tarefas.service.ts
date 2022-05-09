import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Tarefa } from '../model/tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  private readonly API = '/assets/tarefas.json';


  constructor(private httpClient: HttpClient) { }

  list() { //: Tarefa[] {
    return this.httpClient.get<Tarefa[]>(this.API);
    /*return [
      { "_id": 1, "titulo": "Limpar quarto", "descricao": "Dar a geral no quarto", "responsavel": "Jefferson",
    "prioridade": "Alta", "data": "08/05/2022" }
    ];*/
  }
}
