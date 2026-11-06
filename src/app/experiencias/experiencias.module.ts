import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular/lazy';

import { ExperienciasPageRoutingModule } from './experiencias-routing.module';

import { ExperienciasPage } from './experiencias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExperienciasPageRoutingModule
  ],
  declarations: [ExperienciasPage]
})
export class ExperienciasPageModule {}
