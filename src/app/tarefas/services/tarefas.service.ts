import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs/operators';

import { Tarefa } from './../model/tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  //private readonly API = '/assets/tarefas.json';
  private readonly API = '/api/tarefas';

  // gerando erro proposital para tratamento
  // private readonly API = '/assets/aaaaaaaaaaatarefas.json';


  constructor(private httpClient: HttpClient) { }

  list() { //: Tarefa[] {
    return this.httpClient.get<Tarefa[]>(this.API)
    .pipe(
      first(), // para obter a primeira resposta do servidor vindo do tarefas.json
      delay(2000),
      tap(tarefas => console.log(tarefas))
    );
    /*return [
      { "_id": 1, "titulo": "Limpar quarto", "descricao": "Dar a geral no quarto", "responsavel": "Jefferson",
    "prioridade": "Alta", "data": "08/05/2022" }
    ];*/

  }

  // enviando dados vai form para a  API
  save(record: Tarefa){
    return this.httpClient.post<Tarefa>(this.API, record);
  }

}
