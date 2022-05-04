import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaTarefasComponent } from './components/tela-tarefas/tela-tarefas.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path: 'tarefas',
    component: TelaTarefasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


