import { AppMaterialModule } from 'src/app/app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { UiModule } from "../../ui/ui.module";
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { TopBarComponent } from '../../top-bar/top-bar.component';


@NgModule({
    declarations: [LandingPageComponent, SideNavbarComponent,TopBarComponent],
    exports: [
        AppMaterialModule, SideNavbarComponent,TopBarComponent
        
    ],
    imports: [
        CommonModule,
        LandingPageRoutingModule,
        AppMaterialModule,
        UiModule,
        RouterModule


    ]
})
export class LandingPageModule { }
