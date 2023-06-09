import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { ListaEmpleadosComponent } from './components/empleados/lista-empleados/lista-empleados.component';
import { AgregarCaracteristicaComponent } from './components/empleados/agregar-caracteristica/agregar-caracteristica.component';
import { AgregarEmpleadoComponent } from './components/empleados/agregar-empleado/agregar-empleado.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    ListaEmpleadosComponent,
    AgregarCaracteristicaComponent,
    AgregarEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
