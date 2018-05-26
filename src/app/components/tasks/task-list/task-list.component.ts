import { Component, OnInit } from '@angular/core';

///importacion Firebase
import {AngularFireDatabase} from 'angularfire2/database';
import * as _ from 'lodash';

//servicios a importar
import {TaskService} from '../../../services/task.service';

//importar la clase task desde models
import {Task} from '../../../models/task';
//import { element, $ } from 'protractor';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
taskList: Task[];

  constructor(
    //se crea una clase del tipo taskservice
    private taskService:TaskService,
    private db:AngularFireDatabase
  ) { }

  ngOnInit() {
    //metodo selec * from clientes
    this.taskService.getTask()
    //metodo para traer los cambios de cada cambio que haya en la base
    .snapshotChanges()
    ///metodo para escuchar cada cambio en la base
    //trae los datos de la base de datos es decir sus atributos o filas
    .subscribe(item=>{
      this.taskList=[];
      item.forEach(element=>{
        let x =element.payload.toJSON();
        x["$key"]=element.key;
        this.taskList.push(x as Task);
      });
    /* $key:string;
    nombre:string;
    edad:number;
    genero:string;
    ciudad:string;
    //hora:number;
    today =Date();
    */});
  }

}
