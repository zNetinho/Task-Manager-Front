import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarefas } from 'src/app/model/tarefas.model';
import { TarefasService } from 'src/app/service/tarefas.service';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-tela-tarefas',
  templateUrl: './tela-tarefas.component.html',
  styleUrls: ['./tela-tarefas.component.css']
})
export class TelaTarefasComponent implements OnInit {

  baseUrl: String = environment.baseUrl


  listaTarefas: Tarefas[] = [];
  
  tarefas: Tarefas = {
    os: '',
    nomeTarefa: '',
    custo: '',
    dataLimite:'',
    ordemApresentacao: 0
  }



  displayedColumns: string[] = ['os', 'nomeTarefa', 'custo', 'dataLimite', 'acoes'];

  constructor(private service: TarefasService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.findAll();
    this.tarefas.os = this.route.snapshot.paramMap.get('os')!
    this.tarefas.dataLimite = this.route.snapshot.paramMap.get('dataLimite')!
  }

  drop(event: CdkDragDrop<Tarefas[]>) {
    moveItemInArray(this.listaTarefas, event.previousIndex, event.currentIndex); }
    

  findAll() {
    this.service.findAll().subscribe((res => {
      console.log(res)
      this.listaTarefas = res;
    }))
  }

  fromCreate() {
      this.router.navigate(['/create'])
  }

  delete(): void{
    this.service.delete(this.tarefas.os!).subscribe((res => {
      this.router.navigate(['tarefas'])
      this.service.message('Ordem de serviço excluida !')
    }
      ))
  }
}
