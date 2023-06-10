import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { ServicioEmpleadosService } from 'src/app/services/servicio-empleados.service';


@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit{
  faPlus = faPlus;
  empleados: Empleado[] = [];
  empleadoEdit: any;

  constructor(private empleadoService: ServicioEmpleadosService){}

  ngOnInit(): void {
    this.empleados = this.empleadoService.empleados;
  }

  agregarEmpleado(empleado: Empleado){
    this.empleadoService.agregarEmpleado(empleado);
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