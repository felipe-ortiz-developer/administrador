import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  empleados: Empleado[] = [
    // new Empleado(0, 'Felipe', 'Ortiz', 'Developer', '1000000', ['Responsable', 'Esforzado']),
		// new Empleado(1, 'Marisol', 'Martinez', 'Masoterapeuta', '2000000', ['Inspiradora', 'Educada']),
    // new Empleado(2, 'Edy', 'Oyarzun', 'Enfermera', '7000000', ['Estricta', 'Honrrada'])
  ];

  constructor(private httpClient: HttpClient){ }

  setEmpleados(misEmpleados: Empleado[]){
    this.empleados = misEmpleados;
  }

  obtenerEmpleados(){
    return this.httpClient.get('https://administrador-894c8-default-rtdb.firebaseio.com/empleados.json');
  }

  agregarEmpleado(empleado: Empleado){
    this.empleados.push(empleado);
    this.httpClient.put('https://administrador-894c8-default-rtdb.firebaseio.com/empleados.json', this.empleados).subscribe(
      response => console.log("Se ha creado correctamente:", response),
      error => console.log(error)
    );
  }

  actualizarEmpleado(empleado: Empleado){
    console.log(empleado);
    
    let url = "https://administrador-894c8-default-rtdb.firebaseio.com/empleados/"+empleado.id+".json";
    this.httpClient.put(url, empleado).subscribe(
      response => console.log("Se ha modificado correctamente:", response),
      error => console.log(error)
    );
  }

  eliminarEmpleado(id: number){
    let url = "https://administrador-894c8-default-rtdb.firebaseio.com/empleados/"+id+".json";
    this.httpClient.delete(url).subscribe(
      response => console.log("Se ha eliminado correctamente:", response),
      error => console.log(error)
    );
  }
}
