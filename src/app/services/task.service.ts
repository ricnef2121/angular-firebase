import { Injectable } from '@angular/core';
import { Task,Visita } from '../models/task';
//import {Visita} from '../models/task';
import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  taskList: AngularFireList<any>;
  taskListEdad: AngularFireList<any>;
  visitaList:AngularFireList<any>;

  //se usa la siguiente consulta para guardar los datos en una varibale
  selectTask:Task=new Task();
  selectVisita:Visita=new Visita();
  constructor(private firebase: AngularFireDatabase
  ) { }

  getTask(){
    return this.taskList=this.firebase.list('Clientes');
  }
  getVisitas(){
    return this.visitaList=this.firebase.list('Visitas');
  }

  getTaskEdad(){
    return this.taskList=this.firebase.list('Clientes');
}
private visitaCounter = 0;
insertVisita(visita:Visita){
  this.visitaList.push({numero:this.visitaCounter++
  })
}

  insertTask(cliente:Task){
    this.taskList.push({
      nombre:cliente.nombre,
      edad:cliente.edad,
      genero:cliente.genero,
      ciudad:cliente.ciudad,
      today:cliente.today
      //hora:cliente.hora,
      
    });
  }

  updateTask(cliente:Task){
    this.taskList.update(cliente.$key,{
      nombre:cliente.nombre,
      edad:cliente.edad,
      genero:cliente.genero,
      ciudad:cliente.ciudad,
      today:cliente.today
     // hora:cliente.hora,
      
    });
  }

  deleteTask($key:string){
    this.taskList.remove($key)
  }


}
