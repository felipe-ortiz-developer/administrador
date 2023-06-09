import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Empleado } from '../../../models/empleado';
import { Caracteristica } from '../../../models/caracteristica';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent {
  faPen = faPen;
  faTrash = faTrash;
  @Input() empleados: Empleado[] = [];
  @Output() eventoEditarEmpleado = new EventEmitter<Empleado>();
  @Output() eventoEliminarEmpleado = new EventEmitter<number>();

  constructor(private empleadoService: EmpleadoService){ }

  agregarCaracteristica(caracteristica: Caracteristica){
    this.empleados.forEach(
      empleado => {
        if(empleado.id == caracteristica.id){
          if(empleado.caracteristicas == null) {
            empleado.caracteristicas = [];
          }
          empleado.caracteristicas.push(caracteristica.nombre);
          this.empleadoService.actualizarEmpleado(empleado);
        }
      }
    );
    
  }

  editarEmpleado(empleadoId: number) {
    const empleado = this.empleados.find(empleado => empleado.id == empleadoId);
    this.eventoEditarEmpleado.emit(empleado);
  }

  eliminarEmpleado(empleadoId: number){
    Swal.fire({
      title: '¿Estas seguro?',
      text: 'Se eliminará de forma irreversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      confirmButtonColor: 'rgb(145, 0, 0)',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          title: 'Eliminado',
          text: 'Empleado eliminado correctamente.',
          icon: 'success',
          confirmButtonColor: '#0d6efd',
        });
        this.eventoEliminarEmpleado.emit(empleadoId);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: 'Cancelado',
          text: 'Proceso cancelado.',
          icon: 'error',
          confirmButtonColor: '#0d6efd',
        });
      }
    });
  }
}