import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Empleado } from '../../../models/empleado';
import { Caracteristica } from '../../../models/caracteristica';
import { faPen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent {
  faPen = faPen;
  @Input() empleados: Empleado[] = [];
  @Output() eventoEditarEmpleado = new EventEmitter<Empleado>();

  agregarCaracteristica(caracteristica: Caracteristica){
    this.empleados[caracteristica.id].caractetisticas.push(caracteristica.nombre);
  }

  editarEmpleado(empleadoId: number) {
    const empleado = this.empleados.find(empleado => empleado.id == empleadoId);
    this.eventoEditarEmpleado.emit(empleado);
    // console.log(empleado);
  }

  formatear(numero: string){
    return new Intl.NumberFormat('es-CL').format(parseInt(numero));
  }
}