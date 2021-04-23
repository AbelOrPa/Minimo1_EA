import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
  path: '',
  redirectTo: 'farmacovigilancias-list',
  pathMatch: 'full',

},
  { path: 'farmacovigilancias-list', loadChildren: () => import('./componentes/farmacovigilancias-list/farmacovigilancias-list.module').then(m => m.FarmacovigilanciasListModule) },
  { path: 'farmacovigilancias-register', loadChildren: () => import('./componentes/farmacovigilancias-register/farmacovigilancias-register.module').then(m => m.FarmacovigilanciasRegisterModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
