import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { UiCardMainTitleComponent } from './ui-card-main-title/ui-card-main-title.component';
import { AppMaterialModule } from 'src/app/app-material.module';
import { UiDropdownFieldComponent } from './ui-dropdown-field/ui-dropdown-field.component';
import { UiFormFieldLabelComponent } from './ui-form-field-label/ui-form-field-label.component';
import { UiTableComponent } from './ui-table/ui-table.component';
import { UiButtonComponent } from './ui-button/ui-button.component';
import { UiBarChartsComponent } from './ui-bar-charts/ui-bar-charts.component';

import { UiAutoCompleteInputComponent } from './ui-auto-complete-input/ui-auto-complete-input.component';
import { UiTextInputComponent } from './ui-text-input/ui-text-input.component';
import { UiTabGroupComponent } from './ui-tab-group/ui-tab-group.component'
import { RouterModule, Routes } from '@angular/router';
import { UiFootprintCardComponent } from './ui-footprint-card/ui-footprint-card.component';
//import { UiDialogBoxComponent } from './ui-dialog-box/ui-dialog-box.component';
//import { GoogleMapsModule } from '@angular/google-maps';
import { UiDeepNavigationButtonsCardComponent } from './ui-deep-navigation-buttons-card/ui-deep-navigation-buttons-card.component';
import { UiDateInputComponent } from './ui-date-input/ui-date-input.component';
import { UiRadioButtonGroupComponent } from './ui-radio-button-group/ui-radio-button-group.component';

import { UiTextareaComponent } from './ui-textarea/ui-textarea.component';
import { UiNumberInputComponent } from './ui-number-input/ui-number-input.component';
import { UiMultiSelectDpdComponent } from './ui-multi-select-dpd/ui-multi-select-dpd.component';
import { UiLabelComponent } from './ui-label/ui-label.component';
import { UiParaLabelComponent } from './ui-para-label/ui-para-label.component';
import { UiTemplateCardComponent } from './ui-template-card/ui-template-card.component';
import { UiDropdownSearchComponent } from './ui-dropdown-search/ui-dropdown-search.component';



@NgModule({
  declarations: [
    UiCardMainTitleComponent,
    UiDropdownFieldComponent,
    UiFormFieldLabelComponent,
    UiTableComponent,
    UiButtonComponent,
    UiBarChartsComponent,
    UiAutoCompleteInputComponent,
    UiTextInputComponent,
    //UiFileUploadPopupComponent,
    UiTabGroupComponent,
    UiFootprintCardComponent,
    //iDialogBoxComponent, 
    UiDeepNavigationButtonsCardComponent,
    UiDateInputComponent,
    UiRadioButtonGroupComponent,

    UiTextareaComponent,
    UiNumberInputComponent,
    UiMultiSelectDpdComponent,
    UiLabelComponent,
    UiParaLabelComponent,
    UiTemplateCardComponent,
    //UiGroupComponent,
    //UiGroupCollapseComponent,
    UiDropdownSearchComponent,
    
    

  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    RouterModule  

  ],
  exports: [
    UiCardMainTitleComponent,
    UiDropdownFieldComponent,
    UiFormFieldLabelComponent,
    UiTableComponent,
    UiButtonComponent,
    UiBarChartsComponent,
    UiAutoCompleteInputComponent,
    UiTextInputComponent,    
    //UiFileUploadPopupComponent,    
    UiFootprintCardComponent,
    UiTabGroupComponent,RouterModule,    
    //UiDialogBoxComponent,UiDateInputComponent,
    UiRadioButtonGroupComponent,
    UiDeepNavigationButtonsCardComponent,
    AppMaterialModule,UiTextareaComponent,UiNumberInputComponent,    
    UiMultiSelectDpdComponent,UiLabelComponent,
    UiParaLabelComponent,
    UiTemplateCardComponent,    
    //UiGroupComponent,
    //UiGroupCollapseComponent,UiDropdownSearchComponent,
  ],
  providers: [
    DatePipe
  
  ],
})
export class UiModule { }
