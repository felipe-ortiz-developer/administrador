import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Empleado } from '../../../models/empleado';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.css']
})
export class AgregarEmpleadoComponent {
  @Input() nEmpleados: number = 0;
  @Input() empleadoEdit: any;
  @Output() eventoAgregarEmpleado = new EventEmitter<Empleado>();
  @Output() eventoEditarEmpleado = new EventEmitter<Empleado>();

  txtNombre: string= "";
  txtApellido: string= "";
  txtCargo: string= "";
  txtSalario: string= "";

  crearEmpleado(){
    const empleado: Empleado = {
      id: this.nEmpleados,
      nombre: this.txtNombre,
      apellido: this.txtApellido,
      cargo: this.txtCargo,
      salario: this.txtSalario,
      caracteristicas: []
    };
    this.eventoAgregarEmpleado.emit(empleado);

    this.txtNombre = "";
    this.txtApellido = "";
    this.txtCargo = "";
    this.txtSalario = "";
  }

  editarNombre(event: string){
    this.txtNombre = event;
  }
  editarApellido(event: string){
    this.txtApellido = event;
  }
  editarCargo(event: string){
    this.txtCargo = event;
  }
  editarSalario(event: string){
    this.txtSalario = event;
  }

  modificarEmpleado(){
    this.txtNombre !== '' ? this.empleadoEdit.nombre = this.txtNombre : this.empleadoEdit.nombre;
    this.txtApellido !== '' ? this.empleadoEdit.apellido = this.txtApellido : this.empleadoEdit.apellido;
    this.txtCargo !== '' ? this.empleadoEdit.cargo = this.txtCargo : this.empleadoEdit.cargo;
    this.txtSalario !== '' ? this.empleadoEdit.salario = this.txtSalario : this.empleadoEdit.salario;
    
    this.eventoEditarEmpleado.emit(this.empleadoEdit);
  }
}