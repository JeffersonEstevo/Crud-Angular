import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Tarefa } from '../model/tarefa';
import { delay, first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  private readonly API = '/assets/tarefas.json';

  // gerando erro proposital para tratamento
  // private readonly API = '/assets/aaaaaaaaaaatarefas.json';


  constructor(private httpClient: HttpClient) { }

  list() { //: Tarefa[] {
    return this.httpClient.get<Tarefa[]>(this.API)
    .pipe(
      first(), // para obter a primeira resposta od servidor vindo do tarefas.json
      delay(3000),
      tap(tarefas => console.log(tarefas))
    );
    /*return [
      { "_id": 1, "titulo": "Limpar quarto", "descricao": "Dar a geral no quarto", "responsavel": "Jefferson",
    "prioridade": "Alta", "data": "08/05/2022" }
    ];*/
  }
}
