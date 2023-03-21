import { FormulaGeneratorComponent } from './components/formula-generator/formula-generator.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculationComponent } from './components/calculation/calculation.component';

const routes: Routes = [{path:'formula-generator',component:FormulaGeneratorComponent}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalcEngineRoutingModule { }
