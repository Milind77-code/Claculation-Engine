import { ResultPreviewComponent } from './components/result-preview/result-preview.component';

import { AppMaterialModule } from 'src/app/app-material.module';
import { CalculationComponent } from './components/calculation/calculation.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalcEngineRoutingModule } from './calc-engine-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormulaGeneratorComponent } from './components/formula-generator/formula-generator.component';



@NgModule({
  declarations: [
    FormulaGeneratorComponent,ResultPreviewComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    CalcEngineRoutingModule ],
  exports:[
    AppMaterialModule,ResultPreviewComponent
  ]
})
export class CalcEngineModule { }
