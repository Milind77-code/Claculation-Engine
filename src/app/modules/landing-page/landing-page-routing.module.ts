import { LandingPageComponent } from './landing-page.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [{path:'', component: LandingPageComponent,children:[
  {path: 'calc-engine', loadChildren: () => import('../calc-engine/calc-engine.module').then(m => m.CalcEngineModule)}]

}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }