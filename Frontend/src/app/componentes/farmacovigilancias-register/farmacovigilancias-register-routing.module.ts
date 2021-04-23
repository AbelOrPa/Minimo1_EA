import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FarmacovigilanciasRegisterComponent } from './farmacovigilancias-register.component';

const routes: Routes = [{ path: '', component: FarmacovigilanciasRegisterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmacovigilanciasRegisterRoutingModule { }
