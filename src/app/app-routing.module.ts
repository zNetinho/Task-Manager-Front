import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaCriarComponent } from './components/tela-criar/tela-criar.component';
import { TelaEditComponent } from './components/tela-edit/tela-edit.component';
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
  },
  {
    path: 'tarefas/:os',
    component: TelaTarefasComponent
  },
  {
    path: 'create',
    component: TelaCriarComponent
  },
  {
    path: 'tarefas/edit/:os',
    component: TelaEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


