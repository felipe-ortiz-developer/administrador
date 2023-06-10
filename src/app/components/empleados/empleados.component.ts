import { Component } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';


@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent {
  empleados: Empleado[] = [
    new Empleado(0, 'Felipe', 'Ortiz', 'Developer', '1.000.000', ['Responsable', 'Esforzado']),
		new Empleado(1, 'Marisol', 'Martinez', 'Masoterapeuta', '2.000.000', ['Inspiradora', 'Educada'])
  ];

  empleadoEdit: any;

  agregarEmpleado(empleado: Empleado){
    this.empleados.push(empleado);
  }

  editarEmpleado(empleado: Empleado){
    this.empleadoEdit = empleado;
  }

  crearEmpleado(){
    this.empleadoEdit = undefined;
  }

  modificarEmpleado(empleado: Empleado){
    console.log("Empleados edit: ");
    console.log(empleado);

    console.log("Empleados[id]: ");
    console.log(this.empleados[empleado.id]);
    
    this.empleados[empleado.id] = empleado;
  }
}