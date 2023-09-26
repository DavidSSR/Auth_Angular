import { Injectable } from '@angular/core';
import { DbService } from './db.service';
import * as bcrypt from 'bcryptjs';
import { NgForm } from '@angular/forms';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private user:User = new User('','','','',false);

  constructor(private db:DbService) { }

  async getLogIn(datos: NgForm){
    const $datos = await this.db.table('usuarios').where('email').equals(datos.value.email).toArray()
    
    if($datos.length == 0){
      return false
    }
    else{
    const hashedPasswordFromDatabase = $datos[0].password;
    const userInputPassword = datos.value.password;
    const passwordMatches = bcrypt.compareSync(userInputPassword, hashedPasswordFromDatabase);
  
 
    if(passwordMatches){
       
      try {
        await this.db.table('usuarios').update($datos[0].id,{session: true})
        $datos[0].session = true
        this.user = $datos[0]
        return true
      } catch (error) {
        console.log(error)
        return false
      }
    }
    else{
      return false;
    }
  }
  }


  itsAutheticated():boolean{
      if(this.user.session){
        return true
      }else{
        return false
      }
  }


  async logOut(){
    try {
      await this.db.table('usuarios').update(this.user.id,{session: false})
      this.user.session = false
      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }
}
