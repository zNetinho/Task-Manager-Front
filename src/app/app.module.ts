import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyPipe } from '@angular/common';


import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { TelaTarefasComponent } from './components/tela-tarefas/tela-tarefas.component';
import { NavbarComponent } from './templates/navbar/navbar.component';
import { TelaEditComponent } from './components/tela-edit/tela-edit.component';
import { TelaCriarComponent } from './components/tela-criar/tela-criar.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CusteioPipe } from './shared/pipe/custeio.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TelaTarefasComponent,
    NavbarComponent,
    TelaEditComponent,
    TelaCriarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatButtonModule,
    HttpClientModule,
    MatSnackBarModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    DragDropModule
  ],
  providers: [CusteioPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
