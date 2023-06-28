import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent {
  constructor(private loginService: LoginService) {}

  crearUsuario(form: NgForm) {
    const usuario = form.value.usuario;
      const contraseña = form.value.contrasena;
    this.loginService.crearUsuario(usuario, contraseña);
  }
}
