import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { ListaEmpleadosComponent } from './components/empleados/lista-empleados/lista-empleados.component';
import { AgregarCaracteristicaComponent } from './components/empleados/agregar-caracteristica/agregar-caracteristica.component';
import { AgregarEmpleadoComponent } from './components/empleados/agregar-empleado/agregar-empleado.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmpleadoService } from './services/empleado.service';
import { CargosComponent } from './components/cargos/cargos.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginService } from './services/login.service';
import { CookieService } from 'ngx-cookie-service';
import { LoginGuardian } from './components/login/login-guardian';
import { RutModule } from 'rut-chileno';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';


@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    ListaEmpleadosComponent,
    AgregarCaracteristicaComponent,
    AgregarEmpleadoComponent,
    CargosComponent,
    LoginComponent,
    ErrorComponent,
    CrearUsuarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    RutModule
  ],
  providers: [
    EmpleadoService,
    LoginService,
    CookieService,
    LoginGuardian
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
