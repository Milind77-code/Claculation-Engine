
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'calc', pathMatch: 'full' },
  { path: 'calc', loadChildren: () => import('./modules/calc-engine/calc-engine.module').then(m => m.CalcEngineModule) },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
