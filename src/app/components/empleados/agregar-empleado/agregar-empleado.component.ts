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
    let empleado = new Empleado(this.nEmpleados , this.txtNombre, this.txtApellido, this.txtCargo, this.txtSalario, []);
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