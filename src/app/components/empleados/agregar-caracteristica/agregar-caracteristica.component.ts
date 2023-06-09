import { Component, EventEmitter, Output, Input} from '@angular/core';
import { Caracteristica } from '../../../models/caracteristica';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-agregar-caracteristica',
  templateUrl: './agregar-caracteristica.component.html',
  styleUrls: ['./agregar-caracteristica.component.css']
})
export class AgregarCaracteristicaComponent {
  faPlus = faPlus;
  @Output() eventoAgregarCaracteristica = new EventEmitter<Caracteristica>();
  @Input() empleadoId: number = 0;
  caracteristica: string = "";

  agregarCaracteristica(){
    const nuevaCaracteristica = new Caracteristica(this.empleadoId, this.caracteristica);
    this.eventoAgregarCaracteristica.emit(nuevaCaracteristica);
    this.caracteristica = "";
  }
}