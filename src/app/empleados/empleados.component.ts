import { Component } from '@angular/core';
import { Empleado } from '../models/empleado';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent {
  nombre: string= "";
  apellido: string= "";
  cargo: string= "";
  salario: string= "";

  empleados: Empleado[] = [
      new Empleado('Felipe', 'Ortiz', 'Developer', '1200000'),
			new Empleado('Juan', 'Dias', 'Manager', '1400000')
  ];

  agregarEmpleado(){
    let empleado = new Empleado(this.nombre, this.apellido, this.cargo, this.salario);
    this.empleados.push(empleado);
    this.nombre = "";
    this.apellido = "";
    this.cargo = "";
    this.salario = "";
    // console.log(empleado);
  }
}