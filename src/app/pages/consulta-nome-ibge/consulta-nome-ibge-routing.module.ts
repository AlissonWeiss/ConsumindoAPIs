import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultaNomeIBGEPage } from './consulta-nome-ibge.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultaNomeIBGEPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultaNomeIBGEPageRoutingModule {}
