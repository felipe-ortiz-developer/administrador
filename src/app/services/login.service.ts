import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { CookieService } from 'ngx-cookie-service';
import Swal from 'sweetalert2';

interface Respuesta {
  mensaje: string;
  valido?: boolean;
}

@Injectable()
export class LoginService {

  constructor(private router: Router, private cookie: CookieService) { }

  token: string = '';

  crearUsuario(usuario: string, contraseña: string){
    return firebase.auth().createUserWithEmailAndPassword(usuario, contraseña)
      .then((userCredential) => {
        // Usuario creado exitosamente
        const user = userCredential.user;
        this.router.navigate(['/login'])
        Swal.fire({
          icon: 'success',
          title: 'Cuenta creada.',
          text: 'Inicie sesión para confirmar.',
          // showConfirmButton: false,
          // timer: 1500
        });
        // Aquí puedes realizar cualquier otra acción que desees, como guardar información adicional en Firestore
      })
      .catch((error) => {
        // El correo ya existe
        if(error.code == "auth/email-already-in-use"){
          Swal.fire({
            icon: 'warning',
            title: 'Este correo ya esta registrado',
            // text: 'Cree una cuenta para iniciar sesión.',
            // showConfirmButton: false,
            // timer: 1400
          });
        }


        // Ocurrió un error al crear el usuario
        console.error(error);
      });
  }

  login(usuario: string, contraseña: string) {
    firebase.auth().signInWithEmailAndPassword(usuario, contraseña).then(
      response => {
        firebase.auth().currentUser?.getIdToken().then(
          token => {
            this.token = token;
            this.cookie.set("token", this.token);
            this.router.navigate(['/'])
            Swal.fire({
              icon: 'success',
              title: 'Inicio de sesión.',
              text: 'Bienvenido.',
              showConfirmButton: false,
              timer: 1500
            });
          }
        )
      }
    ).catch((error) => {
      // Ocurrió un error durante el inicio de sesión
      console.log("Catch");
      console.log(error);
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error code: :", errorCode);
      console.error("Error mensaje: :", errorMessage);

      if(errorCode == "auth/wrong-password"){
        Swal.fire({
          icon: 'error',
          title: 'Contraseña incorrecta.',
          showConfirmButton: false,
          timer: 1400
        });
      }else if(errorCode == "auth/user-not-found"){
        Swal.fire({
          icon: 'warning',
          title: 'El usuario no existe',
          text: 'Cree una cuenta para iniciar sesión.',
          // showConfirmButton: false,
          // timer: 1400
        });
        this.router.navigate(['/crear-usuario']);
      }else if(errorCode == "auth/too-many-requests"){
        Swal.fire({
          icon: 'warning',
          title: 'Cuenta temporalmente bloqueada',
          text: 'Realizo demasiados intentos fallidos, vuelva a intentarlo más tarde.',
          // showConfirmButton: false,
          // timer: 1300
        });
      }
    });
  }

  getIdToken(){
    return this.cookie.get("token");
  }

  estaLogeado(){
    return this.cookie.get("token");
  }

  logout(){
    firebase.auth().signOut().then(() => {
      this.token = "";
      this.cookie.set("token", this.token);
      this.router.navigate(['/login']);
      Swal.fire({
        icon: 'success',
        title: 'Cierre de sesión.',
        // text: 'Realizado correctamente.',
        // showConfirmButton: false,
        // timer: 1500
      });
    });
  }
}
