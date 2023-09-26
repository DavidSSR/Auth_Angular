import { Injectable } from '@angular/core';
import Dexie from 'dexie';

@Injectable({
  providedIn: 'root'
})
export class DbService extends Dexie{
  

  constructor() {
    super('DexieDB');

    this.version(1).stores({
      usuarios: '++id, firstName, lastName, email, password, session'
    })
    this.open().then(data => console.log("DB abierto")) .catch(err => console.log(err.message));
  
   }
}
