import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Empleado } from '../../../models/empleado';
import { Caracteristica } from '../../../models/caracteristica';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { ServicioEmpleadosService } from 'src/app/services/servicio-empleados.service';

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

  constructor(private empleadoService: ServicioEmpleadosService){ }

  agregarCaracteristica(caracteristica: Caracteristica){
    this.empleados[caracteristica.id].caractetisticas.push(caracteristica.nombre);
  }

  editarEmpleado(empleadoId: number) {
    const empleado = this.empleados.find(empleado => empleado.id == empleadoId);
    this.eventoEditarEmpleado.emit(empleado);
    // console.log(empleado);
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
        this.empleados = this.empleados.filter(empleado => empleado.id !== empleadoId);
        this.empleadoService.eliminarEmpleado(empleadoId);
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

  formatear(numero: string){
    return new Intl.NumberFormat('es-CL').format(parseInt(numero));
  }
}