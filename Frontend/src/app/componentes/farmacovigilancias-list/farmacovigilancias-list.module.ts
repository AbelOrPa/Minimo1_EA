import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FarmacovigilanciasListRoutingModule } from './farmacovigilancias-list-routing.module';
import { FarmacovigilanciasListComponent } from './farmacovigilancias-list.component';



@NgModule({
  declarations: [
    FarmacovigilanciasListComponent
  ],
  imports: [
    CommonModule,
    FarmacovigilanciasListRoutingModule

  ]
})
export class FarmacovigilanciasListModule { }
