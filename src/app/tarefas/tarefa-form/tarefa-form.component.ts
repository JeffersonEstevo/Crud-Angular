import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { TarefasService } from './../services/tarefas.service';

@Component({
  selector: 'app-tarefa-form',
  templateUrl: './tarefa-form.component.html',
  styleUrls: ['./tarefa-form.component.scss']
})
export class TarefaFormComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private service: TarefasService,
    private snackBar: MatSnackBar,
    private location: Location) {
    this.form = this.formBuilder.group({
      titulo: [null],
      descricao: [null],
      responsavel: [null],
      prioridade: [null],
      data: [null]
    });
   }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service.save(this.form.value).subscribe(result => this.onSuccess(), error => this.onError());
  }

  onCancel(){
    this.location.back();
  }

  private onSuccess(){
    this.snackBar.open('Tarefa salva com sucesso!', '', {duration: 3000} );
    this.onCancel();
  }

  private onError(){
    this.snackBar.open('Erro ao salvar tarefa.', '', {duration: 3000} );
  }

}
