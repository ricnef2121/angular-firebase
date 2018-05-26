import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';


//aqui comiensa la importacion de firebase
import {AngularFireModule}from 'angularfire2';
import {AngularFireDatabase} from 'angularfire2/database-deprecated';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {environment} from '../environments/environment';


//componentes
import { TasksComponent } from './components/tasks/tasks.component';
import { AddTasksComponent } from './components/add-tasks/add-tasks.component';
import { TaskListComponent } from './components/tasks/task-list/task-list.component';


//servicios
import { TaskService } from './services/task.service';
import { TaskComponent } from './components/tasks/task/task.component';
import { FiltroComboComponent } from './components/filtro-combo/filtro-combo.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    AddTasksComponent,
    TaskListComponent,
    TaskComponent,
    FiltroComboComponent,
   
  ],
  imports: [
    BrowserModule,
   AngularFireModule.initializeApp(environment.firebase),
   //AngularFireDatabase,
   AngularFireDatabaseModule,
   FormsModule
  ],
  providers: [
    TaskService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
