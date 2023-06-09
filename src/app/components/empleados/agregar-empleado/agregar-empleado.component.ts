import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.css']
})
export class AgregarEmpleadoComponent {
  @Input() nEmpleados: number = 0;
  @Output() eventoAgregarEmpleado = new EventEmitter<Empleado>();

  txtNombre: string= "";
  txtApellido: string= "";
  txtCargo: string= "";
  txtSalario: string= "";

  agregarEmpleado(){
    let empleado = new Empleado(this.nEmpleados , this.txtNombre, this.txtApellido, this.txtCargo, this.txtSalario, []);
    this.eventoAgregarEmpleado.emit(empleado);

    this.txtNombre = "";
    this.txtApellido = "";
    this.txtCargo = "";
    this.txtSalario = "";
  }
}