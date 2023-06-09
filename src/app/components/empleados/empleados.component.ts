import { Component } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';


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
      new Empleado(0, 'Felipe', 'Ortiz', 'Developer', '1200000', ['Responsable', 'Esforzado']),
			new Empleado(1, 'Juan', 'Dias', 'Manager', '1400000', ['Inspirador', 'Educado'])
  ];

  agregarEmpleado(){
    let empleado = new Empleado(this.empleados.length , this.txtNombre, this.txtApellido, this.txtCargo, this.txtSalario, []);
    this.empleados.push(empleado);
    this.txtNombre = "";
    this.txtApellido = "";
    this.txtCargo = "";
    this.txtSalario = "";
  }
}