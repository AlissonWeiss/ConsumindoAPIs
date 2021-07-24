import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViaCepPage } from './via-cep.page';

const routes: Routes = [
  {
    path: '',
    component: ViaCepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViaCepPageRoutingModule {}
