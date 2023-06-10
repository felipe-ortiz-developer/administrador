import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class ServicioEmpleadosService {
  empleados: Empleado[] = [
    new Empleado(0, 'Felipe', 'Ortiz', 'Developer', '1000000', ['Responsable', 'Esforzado']),
		new Empleado(1, 'Marisol', 'Martinez', 'Masoterapeuta', '2000000', ['Inspiradora', 'Educada'])
  ];

  constructor(){ }

  agregarEmpleado(empleado: Empleado){
    this.empleados.push(empleado);
  }
}
