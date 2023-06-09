import { Component, EventEmitter, Output, Input} from '@angular/core';

@Component({
  selector: 'app-agregar-caracteristica',
  templateUrl: './agregar-caracteristica.component.html',
  styleUrls: ['./agregar-caracteristica.component.css']
})
export class AgregarCaracteristicaComponent {
  @Output() eventoAgregarCaracteristica = new EventEmitter<{ id:number, nombre:string }>();
  @Input() empleadoId: number = 0;

  agregarCaracteristica(value: string){
    const valores = {
      id: this.empleadoId,
      nombre: value
    }
    this.eventoAgregarCaracteristica.emit(valores);
  }
}