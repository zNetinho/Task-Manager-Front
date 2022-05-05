import { Component, OnInit } from '@angular/core';
import { Tarefas } from 'src/app/model/tarefas.model';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TarefasService } from 'src/app/service/tarefas.service';

@Component({
  selector: 'app-tela-edit',
  templateUrl: './tela-edit.component.html',
  styleUrls: ['./tela-edit.component.css']
})
export class TelaEditComponent implements OnInit {

  tarefas: Tarefas = {
    os: '',
    nomeTarefa: '',
    custo: '',
    dataLimite: '',
    ordemApresentacao: 0
  }

  nomeTarefa = new FormControl('', [Validators.minLength(3)]);
  custo = new FormControl('', [Validators.minLength(4)]);
  dataLimite = new FormControl('', [Validators.minLength(5)]);

  constructor(private route: ActivatedRoute, private service: TarefasService, private router: Router) { }

  ngOnInit(): void {
    this.tarefas.os = this.route.snapshot.paramMap.get('os')!
    this.findById();
  }

  getMessage() {
    if (this.nomeTarefa.invalid) {
      return "O campo NOME DA TAREFA deve conter no minimo 3 caracteres"
    }
    if (this.custo.invalid) {
      return "O campo Custo deve conter no minimo 4 caracteres"
    }
    if (this.dataLimite.invalid) {
      return "O campo DATA LIMITE deve conter no minimo UMA DATA"
    }
    return false;
  }

  findById() :void {
    this.service.findById(this.tarefas.os!).subscribe((res => {
      this.tarefas.os = res.os
      this.tarefas.nomeTarefa = res.nomeTarefa
      this.tarefas.custo = res.custo
      this.tarefas.dataLimite = res.dataLimite
      this.tarefas.ordemApresentacao = res.ordemApresentacao
    }))
  }

  update(): void {
    this.service.update(this.tarefas).subscribe((res => {
      this.router.navigate(['tarefas'])
      this.service.message('Ordem alterada')
    }))
  }

  cancel(): void {
    this.router.navigate(['tarefas'])
  }

}
