import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class LoginService {

  constructor(private router: Router, private cookie: CookieService) { }

  token: string = '';

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