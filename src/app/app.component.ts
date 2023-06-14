import { Component, OnInit } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import firebase from "firebase/compat/app";
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private loginService: LoginService){ }

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyBOtU3tBDUvaGMw6RGVSZ23WI0gktb90Dc",
      authDomain: "administrador-894c8.firebaseapp.com",
    });
  }
  // firebaseConfig = {
  //   apiKey: "AIzaSyBOtU3tBDUvaGMw6RGVSZ23WI0gktb90Dc",
  //   authDomain: "administrador-894c8.firebaseapp.com",
  //   databaseURL: "https://administrador-894c8-default-rtdb.firebaseio.com",
  //   projectId: "administrador-894c8",
  //   storageBucket: "administrador-894c8.appspot.com",
  //   messagingSenderId: "1042146860310",
  //   appId: "1:1042146860310:web:489371443050b6b870c437",
  //   measurementId: "G-GCT3CXPE6K"  
  // };
  faMagnifyingGlass = faMagnifyingGlass;

  estaLogeado(): string{
    return this.loginService.estaLogeado();
  }
  logout(){
    this.loginService.logout();
  }
}
