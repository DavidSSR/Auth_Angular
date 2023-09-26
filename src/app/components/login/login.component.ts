import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor( 
    private _authService:AuthService,
     private _router:Router
     ){}

  async logIn(datos: NgForm){
    
    const usuario = await this._authService.getLogIn(datos)
    if(!usuario){
      Swal.fire({
        icon: 'error',
        title: 'Error al Iniciar Sesion',
        text: 'El Usuario no existe o la contraseña es incorrecta'
      })
    }else{
      Swal.fire({
        icon: 'success',
        title: 'Bienvenido'
      }).then((result) => {
        if (result.isConfirmed) {
          this._router.navigate(['/home']);
        }
      }
      );
    }
  }

}
