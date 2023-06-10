import { Component, EventEmitter, Output, Input} from '@angular/core';
import { Caracteristica } from '../../../models/caracteristica';

@Component({
  selector: 'app-agregar-caracteristica',
  templateUrl: './agregar-caracteristica.component.html',
  styleUrls: ['./agregar-caracteristica.component.css']
})
export class AgregarCaracteristicaComponent {
  @Output() eventoAgregarCaracteristica = new EventEmitter<Caracteristica>();
  @Input() empleadoId: number = 0;

  agregarCaracteristica(nombre: string){
    const caracteristica = new Caracteristica(this.empleadoId, nombre);
    this.eventoAgregarCaracteristica.emit(caracteristica);
  }
}