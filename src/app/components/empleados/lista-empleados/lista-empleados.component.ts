import { Component, Input } from '@angular/core';
import { Empleado } from '../../../models/empleado';
import { Caracteristica } from '../../../models/caracteristica';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent {
  @Input() empleados: Empleado[] = [];

  agregarCaracteristica(caracteristica: Caracteristica){
    // alert(caracteristica.id + " " +caracteristica.caracteristica);
    this.empleados[caracteristica.id].caractetisticas.push(caracteristica.nombre);
  }
}