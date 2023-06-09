import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmpleadosComponent } from './empleados/empleados.component';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { AgregarCaracteristicaComponent } from './components/empleado/agregar-caracteristica/agregar-caracteristica.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    ListaEmpleadosComponent,
    AgregarCaracteristicaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
