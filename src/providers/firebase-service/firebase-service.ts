import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the FirebaseServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseServiceProvider {

  constructor(public db : AngularFireDatabase) {
    console.log('Hello FirebaseServiceProvider Provider');
  }

  saveVendedor (vendedor : any){
    this.db.list('vendedor')
        .push(vendedor)
        .then(r => console.log(r));
  }

  getAllVendedor(){
    return this.db.list('vendedor').valueChanges();
  }

}
