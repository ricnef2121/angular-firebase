import { Component, OnInit } from '@angular/core';

//servicio
import { TaskService} from '../../../services/task.service';
import { NgForm } from '@angular/forms';
import { Task,Visita } from '../../../models/task';
//import {FiltroComboComponent} from './../../filtro-combo/filtro-combo.component'

//task class
import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
/*
class Visita {
  constructor(public title) { }
}*/

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {/*
public visitas:FirebaseListObservable<Visita[]>;*/
  constructor(private taskService:TaskService)
   /* private db: AngularFireDatabase) */{
     /* this.db.list('visitas');*/
     }
/*  private visitaCounter = 0;

  public addVisita(): void {
    const newVisita = new Visita(`My book #${this.visitaCounter++}`);
    this.visitas.push(newVisita);
}

*/
  ngOnInit() {
    this.taskService.getTask();
    this.resetForm();
   // this.filtroCombo.contador();
  }

onSubmit(taskForm:NgForm){
  this.taskService.insertTask(taskForm.value);
  this.resetForm(taskForm);
}

resetForm(taskForm?:NgForm){

  if (taskForm != null)
  taskForm.reset();
  this.taskService.selectTask= new Task();
}
}
