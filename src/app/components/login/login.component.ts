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
    const usuario = form.value.usuario;
    const contraseña = form.value.contraseña;
    // console.log(usuario, contraseña);
    this.loginService.login(usuario, contraseña);
  }
}