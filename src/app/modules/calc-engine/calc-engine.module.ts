import { LandingPageModule } from './landing-page/landing-page.module';
import { AppMaterialModule } from 'src/app/app-material.module';
import { CalculationComponent } from '../calc-engine/calculation/calculation.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalcEngineRoutingModule } from './calc-engine-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppMaterialModule,
    LandingPageModule,
    CalcEngineRoutingModule  ],
  exports:[
    AppMaterialModule
  ]
})
export class CalcEngineModule { }
