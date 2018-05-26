import { Component, OnInit } from '@angular/core';

///configuracion firebase
import { AngularFireDatabase } from 'angularfire2/database';
import * as _ from 'lodash';

@Component({
  selector: 'app-filtro-combo',
  templateUrl: './filtro-combo.component.html',
  styleUrls: ['./filtro-combo.component.css']
})
export class FiltroComboComponent implements OnInit {
  constructor(private db: AngularFireDatabase) {  }
  
 /// unwrapped arrays from firebase
 clientes: any;
 filteredClientes: any;

 /// filter-able properties
 edad: number;
 genero: string;
 ciudad: string;

 /// Active filter rules
 filters = {}


ngOnInit() {
  this.db.list('/Clientes').valueChanges()
      .subscribe(clientes => {
        this.clientes = clientes;
        this.applyFilters()
    })
}

/*
ngOnInit() {
  this.db.list('/Clientes')
      .subscribe(clientes => {
        this.clientes = clientes;
        this.applyFilters()
    })
}*/

private applyFilters() {
  this.filteredClientes = _.filter(this.clientes, _.conforms(this.filters) )
}

/// filter property by equality to rule
filterExact(property: string, rule: any) {
  this.filters[property] = val => val == rule
  this.applyFilters()
}

filterGreaterThan(property: string, rule: number) {
  this.filters[property] = val => val > rule-1
  this.applyFilters()
}

filterGreate(property: string, rule: string) {
  this.filters[property] = val => val > rule
}



/// removes filter
removeFilter(property: string) {
  delete this.filters[property]
  this[property] = null
  this.applyFilters()
}


greaterTen = [];
conta=0;
numbers=[1,2,3,4,20,25,2,3];
contador(){
  for (let i = 0; i< this.numbers.length; i++) {
    var conta=conta+1;
    /*var currentNumber = this.numbers[i];
    if (currentNumber > 10) {
      this.greaterTen.push(currentNumber)
    }
  }
  
  console.log(this.greaterTen);
  */
 console.log(this.conta);
}
}

}
