import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';
import { faPlus, faFilter } from '@fortawesome/free-solid-svg-icons';
import { ServicioEmpleadosService } from 'src/app/services/servicio-empleados.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit{
  faPlus = faPlus;
  faFilter = faFilter;
  empleados: Empleado[] = [];
  empleadoEdit: any;

  txtNombre: string = '';
  txtApellido: string = '';
  txtCargo: string = '';
  txtSalario: string = '';

  constructor(private empleadoService: ServicioEmpleadosService){}

  ngOnInit(): void {
    this.empleadoService.obtenerEmpleados().subscribe( misEmpleados => {
      this.empleados = Object.values(misEmpleados);
      this.empleadoService.setEmpleados(this.empleados);
    });
  }

  buscarEmpleados(){
    this.empleados = this.empleadoService.empleados;
    if(this.txtNombre !== ''){
      this.empleados = this.empleados.filter(empleado => empleado.nombre == this.txtNombre);
    }
    if(this.txtApellido !== ''){
      this.empleados = this.empleados.filter(empleado => empleado.apellido == this.txtApellido);
    }
    if(this.txtCargo !== ''){
      this.empleados = this.empleados.filter(empleado => empleado.cargo == this.txtCargo);
    }
    if(this.txtSalario !== ''){
      this.empleados = this.empleados.filter(empleado => empleado.salario == this.txtSalario);
    }
    this.empleados = this.empleados.filter(element => element !== undefined);
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
    this.empleadoService.setEmpleados(this.empleados);
    this.empleadoService.actualizarEmpleado(empleado.id, empleado);
  }
}