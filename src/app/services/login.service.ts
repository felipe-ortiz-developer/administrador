import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { CookieService } from 'ngx-cookie-service';

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
        // Aquí puedes realizar cualquier otra acción que desees, como guardar información adicional en Firestore
      })
      .catch((error) => {
        // Ocurrió un error al crear el usuario
        console.error(error);
      });
  }

  login(usuario: string, contraseña: string){
    firebase.auth().signInWithEmailAndPassword(usuario, contraseña).then(
      response => {
        firebase.auth().currentUser?.getIdToken().then(
          token => {
            this.token = token;
            this.cookie.set("token", this.token);
            this.router.navigate(['/'])
          }
        )
      }
    );
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
    });
  }
}
