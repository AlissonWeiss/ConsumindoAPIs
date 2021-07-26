import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultaNomeIBGEPageRoutingModule } from './consulta-nome-ibge-routing.module';

import { ConsultaNomeIBGEPage } from './consulta-nome-ibge.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultaNomeIBGEPageRoutingModule
  ],
  declarations: [ConsultaNomeIBGEPage]
})
export class ConsultaNomeIBGEPageModule {}
