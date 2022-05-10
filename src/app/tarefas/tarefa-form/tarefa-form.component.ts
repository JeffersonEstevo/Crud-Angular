import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tarefa-form',
  templateUrl: './tarefa-form.component.html',
  styleUrls: ['./tarefa-form.component.scss']
})
export class TarefaFormComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
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

  }

  onCancel(){

  }

}
