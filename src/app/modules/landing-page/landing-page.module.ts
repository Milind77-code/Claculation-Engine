import { AppMaterialModule } from 'src/app/app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { UiModule } from ".././ui/ui.module";
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { AppModule } from "../../app.module";
import { CalcEngineModule } from "../calc-engine/calc-engine.module";


@NgModule({
    declarations: [LandingPageComponent, SideNavbarComponent, TopBarComponent, ],
    exports: [
        AppMaterialModule, SideNavbarComponent, TopBarComponent
    ],
    imports: [
        CommonModule,
        LandingPageRoutingModule,
        AppMaterialModule,
        UiModule,
        RouterModule,
        CalcEngineModule
    ]
})
export class LandingPageModule { }
