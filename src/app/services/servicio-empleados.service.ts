import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class ServicioEmpleadosService {

  empleados: Empleado[] = [
    // new Empleado(0, 'Felipe', 'Ortiz', 'Developer', '1000000', ['Responsable', 'Esforzado']),
		// new Empleado(1, 'Marisol', 'Martinez', 'Masoterapeuta', '2000000', ['Inspiradora', 'Educada']),
    // new Empleado(2, 'Edy', 'Oyarzun', 'Enfermera', '7000000', ['Estricta', 'Honrrada'])
  ];

  constructor(private dataService: DataService){ }

  setEmpleados(misEmpleados: Empleado[]){
    this.empleados = misEmpleados;
  }

  obtenerEmpleados(){
    return this.dataService.cargarEmpleados(); // Esto retorna un observable
  }

  agregarEmpleado(empleado: Empleado){
    this.empleados.push(empleado);
    this.dataService.guardarEmpleado(this.empleados);
  }

  actualizarEmpleado(id: number, empleado: Empleado){
    this.dataService.actualizarEmpleado(id, empleado);
  }

  eliminarEmpleado(id: number){
    this.dataService.eliminarEmpleado(id);
  }
}
