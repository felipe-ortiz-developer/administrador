import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';
import { faPlus, faFilter } from '@fortawesome/free-solid-svg-icons';
import { EmpleadoService } from 'src/app/services/empleado.service';
import Swal from 'sweetalert2';

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

  maxId: number = 0;

  constructor(private empleadoService: EmpleadoService){ }

  ngOnInit(): void {
    this.empleadoService.obtenerEmpleados().subscribe( misEmpleados => {
      if(misEmpleados){
        let arreglo = Array.isArray(misEmpleados) ? misEmpleados : [misEmpleados];
        arreglo = arreglo.filter(obj => obj !== null);
        // console.log(arreglo);
        
        arreglo.forEach(obj => {
          obj.caractetisticas = [];
        });
        this.empleados = Object.values(arreglo);
      }else{
        this.empleados = [];
      }
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
    this.empleados.forEach(empleado => {
      if(this.maxId <= empleado.id){
        this.maxId = empleado.id;
      }
    });
    this.maxId = this.maxId+1;
    empleado.id = this.maxId;
    this.empleadoService.agregarEmpleado(empleado);
  }

  editarEmpleado(empleado: Empleado){
    this.empleadoEdit = empleado;
  }

  crearEmpleado(){
    this.empleadoEdit = undefined;
  }

  modificarEmpleado(empleado: Empleado){
    Swal.fire({
      title: '¿Estas seguro?',
      text: 'Se modificará de forma irreversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      confirmButtonColor: '#FFC107',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          title: 'Editar',
          text: 'Empleado editado correctamente.',
          icon: 'success',
          confirmButtonColor: '#0d6efd',
        });
        this.empleados[empleado.id] = empleado;
        this.empleadoService.setEmpleados(this.empleados);
        this.empleadoService.actualizarEmpleado(empleado);
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

  eliminarEmpleado(id:number){
    this.empleados = this.empleados.filter(empleado => empleado.id !== id);
    this.empleadoService.setEmpleados(this.empleados);
    this.empleadoService.eliminarEmpleado(id);
  }
}