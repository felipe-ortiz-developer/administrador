import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { EmpleadosComponent } from './components/empleados/empleados.component';
import { CargosComponent } from './components/cargos/cargos.component';

const routes: Routes = [
  {path: '', component: EmpleadosComponent},
  {path: 'cargos', component: CargosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
