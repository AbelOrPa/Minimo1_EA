import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FarmacovigilanciasListComponent } from './farmacovigilancias-list.component';

const routes: Routes = [{ path: '', component: FarmacovigilanciasListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmacovigilanciasListRoutingModule { }
