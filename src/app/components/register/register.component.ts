import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DbService } from 'src/app/services/db.service';
import * as bcrypt from 'bcryptjs';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
password:string = '';
secondPassword: string = '';
  constructor(private db:DbService, private _router:Router){}


  guardar(datos: NgForm){
    const plainPassword = datos.value.password;
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(plainPassword, salt);

    datos.value.password = hashedPassword;


    this.db.table('usuarios').add({...datos.value, session: false});
    Swal.fire({
      icon: 'success',
      title: 'Usuario Creado',
      text: 'El Usuario ha sido creado correctamente'
    }).then((result) => {
      if (result.isConfirmed) {
        this._router.navigate(['/login']);
      }
    }
    );

  }

 

}


