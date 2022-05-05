import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Tarefas } from 'src/app/model/tarefas.model';
import { TarefasService } from 'src/app/service/tarefas.service';

@Component({
  selector: 'app-tela-criar',
  templateUrl: './tela-criar.component.html',
  styleUrls: ['./tela-criar.component.css']
})
export class TelaCriarComponent implements OnInit {

  tarefas: Tarefas = {
    os: '',
    nomeTarefa: '',
    custo: '',
    dataLimite:'',
    ordemApresentacao: 0
  }

  nomeTarefa = new FormControl('', [Validators.minLength(3)]);
  custo = new FormControl('', [Validators.minLength(4)]);
  dataLimite = new FormControl('', [Validators.nullValidator]);

  constructor(private service: TarefasService, private router: Router) { }

  ngOnInit(): void {
  }

  fromCreate() {
    this.service.create(this.tarefas).subscribe((res => {
      this.router.navigate(['tarefas'])
      this.service.message('Ordem criada !')
    }), err => {
      for (let i = 0; i < err.error.errors.length; i++) {
        this.service.message(err.error.errors[i].message)
      }
    })
  }
}
