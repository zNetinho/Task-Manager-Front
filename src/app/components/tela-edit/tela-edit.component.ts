import { Component, OnInit } from '@angular/core';
import { Tarefas } from 'src/app/model/tarefas.model';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
    dataLimite:'',
    ordemApresentacao: 0
  }

  constructor(private route: ActivatedRoute, private service: TarefasService) { }

  ngOnInit(): void {
    this.tarefas.os = this.route.snapshot.paramMap.get('os')!
    this.findById();
  }

  findById() :void {
    this.service.findById(+this.tarefas.os!).subscribe((res => {
      this.tarefas.nomeTarefa = res.nomeTarefa
      this.tarefas.custo = res.custo
      this.tarefas.dataLimite = res.dataLimite
      this.tarefas.ordemApresentacao = res.ordemApresentacao
    }))
  }

}
