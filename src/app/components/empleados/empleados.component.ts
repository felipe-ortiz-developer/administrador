import { Component } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent {
  faPlus = faPlus;
  empleados: Empleado[] = [
    new Empleado(0, 'Felipe', 'Ortiz', 'Developer', '1000000', ['Responsable', 'Esforzado']),
		new Empleado(1, 'Marisol', 'Martinez', 'Masoterapeuta', '2000000', ['Inspiradora', 'Educada'])
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
    this.empleados[empleado.id] = empleado;
  }
}