import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FarmacovigilanciasRegisterRoutingModule } from './farmacovigilancias-register-routing.module';
import { FarmacovigilanciasRegisterComponent } from './farmacovigilancias-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FarmacovigilanciasRegisterComponent
  ],
  imports: [
    CommonModule,
    FarmacovigilanciasRegisterRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class FarmacovigilanciasRegisterModule { }
