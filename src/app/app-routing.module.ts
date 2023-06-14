import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpleadosComponent } from './components/empleados/empleados.component';
import { CargosComponent } from './components/cargos/cargos.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuardian } from './components/login/login-guardian';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: EmpleadosComponent, canActivate: [LoginGuardian]},
  {path: 'cargos', component: CargosComponent, canActivate: [LoginGuardian]},
  {path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
