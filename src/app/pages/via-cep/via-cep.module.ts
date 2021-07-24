import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViaCepPageRoutingModule } from './via-cep-routing.module';

import { ViaCepPage } from './via-cep.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViaCepPageRoutingModule
  ],
  declarations: [ViaCepPage]
})
export class ViaCepPageModule {}
