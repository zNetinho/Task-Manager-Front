import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tarefas } from '../model/tarefas.model';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }


  findAll():Observable<Tarefas[]> {
    const url = `${this.baseUrl}tarefas`
    return this.http.get<Tarefas[]>(url)
  }

  findById(os: String):Observable<Tarefas> {
    const url = `${this.baseUrl}tarefas/${os}`
    return this.http.get<Tarefas>(url)
  }

  create(tarefa: Tarefas):Observable<Tarefas> {
    const url = `${this.baseUrl}tarefas`
    return this.http.post<Tarefas>(url, tarefa);
  }

  delete(os: String):Observable<void> {
    const url = `${this.baseUrl}tarefas/${os}`
    return this.http.delete<void>(url)
  }

  update(tarefa: Tarefas):Observable<Tarefas> {
    const url = `${this.baseUrl}tarefas/${tarefa.os}`
    return this.http.put<Tarefas>(url, tarefa)
  }

  message(str: String): void {
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }
}
