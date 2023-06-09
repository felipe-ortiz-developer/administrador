import { Component } from '@angular/core';
import { Empleado } from '../models/empleado';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent {
  txtNombre: string= "";
  txtApellido: string= "";
  txtCargo: string= "";
  txtSalario: string= "";

  empleados: Empleado[] = [
      new Empleado('Felipe', 'Ortiz', 'Developer', '1200000'),
			new Empleado('Juan', 'Dias', 'Manager', '1400000')
  ];

  agregarEmpleado(){
    let empleado = new Empleado(this.txtNombre, this.txtApellido, this.txtCargo, this.txtSalario);
    this.empleados.push(empleado);
    this.txtNombre = "";
    this.txtApellido = "";
    this.txtCargo = "";
    this.txtSalario = "";
    // console.log(empleado);
  }
}