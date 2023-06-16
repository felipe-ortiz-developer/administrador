import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private loginService: LoginService){ }

  login(form: NgForm){
    if (form.valid) {
      // El formulario es válido, puedes realizar acciones aquí
      const usuario = form.value.usuario;
      const contraseña = form.value.contrasena;
      // console.log(usuario, contraseña);
      this.loginService.login(usuario, contraseña);
    } else {
      console.log(form);
      // El formulario no es válido, maneja los errores aquí
    }
    
  }
}