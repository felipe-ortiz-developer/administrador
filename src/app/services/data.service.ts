import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(private httpClient: HttpClient) { }

  cargarEmpleados(){
    return this.httpClient.get('https://administrador-894c8-default-rtdb.firebaseio.com/datos.json');
  }

  guardarEmpleado(empleados: Empleado[]){
    this.httpClient.put('https://administrador-894c8-default-rtdb.firebaseio.com/datos.json', empleados).subscribe(
      response => console.log("Se ha creado correctamente:", response),
      error => console.log(error)
    );
  }

  actualizarEmpleado(id: number, empleado: Empleado){
    let url = "https://administrador-894c8-default-rtdb.firebaseio.com/datos/"+id+".json";
    // console.log("url: "+url);
    this.httpClient.put(url, empleado).subscribe(
      response => console.log("Se ha modificado correctamente:", response),
      error => console.log(error)
    );
  }

  eliminarEmpleado(id: number){
    let url = "https://administrador-894c8-default-rtdb.firebaseio.com/datos/"+id+".json";
    // console.log("url: "+url);
    this.httpClient.delete(url).subscribe(
      response => console.log("Se ha eliminado correctamente:", response),
      error => console.log(error)
    );
  }
}
