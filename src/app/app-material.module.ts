import { NgModule } from '@angular/core';
import { MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import {MatListItem, MatListModule} from '@angular/material/list';
//import { NgxSpinner,NgxSpinnerModule} from 'ngx-spinner';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
//import { NgxGraphModule } from '@swimlane/ngx-graph';
import { MatButtonModule } from '@angular/material/button';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
//import { DiagramModule } from '@syncfusion/ej2-angular-diagrams';


@NgModule({
  declarations: [],
  imports: [
      MatFormFieldModule,
      MatInputModule,
      MatCheckboxModule,
      MatRadioModule,
      MatStepperModule,
      MatIconModule,
      MatTableModule,
      MatSnackBarModule,
      MatProgressSpinnerModule,
      MatDialogModule,
      MatTabsModule,
      MatSelectModule,
      MatExpansionModule,
      MatTooltipModule,
      FormsModule,
      ReactiveFormsModule,
      MatOptionModule,
      MatCardModule,
      MatListModule,
      //NgxSpinnerModule,
      MatAutocompleteModule,
      MatToolbarModule,
      MatSidenavModule,
      MatSortModule,
      MatTableModule,
      MatSnackBarModule,
      //NgxGraphModule,
      MatButtonModule,
      NgxMatSelectSearchModule,
      MatTooltipModule,
      MatProgressBarModule,
  ],
  exports: [
      MatFormFieldModule,
      MatInputModule,
      MatCheckboxModule,
      MatRadioModule,
      MatStepperModule,
      MatIconModule,
      MatTableModule,
      MatSnackBarModule,
      MatProgressSpinnerModule,
      MatDialogModule,
      MatTabsModule,
      MatMenuModule,
      MatSelectModule,
      MatOptionModule,
      MatExpansionModule,
      MatTooltipModule,
      FormsModule,
      ReactiveFormsModule,
      MatCardModule,
      MatListItem, MatListModule,
     // NgxSpinnerModule,
      MatAutocompleteModule,
      MatToolbarModule,
      MatSidenavModule,
      MatSortModule,
      MatTableModule,
      MatSnackBarModule,         
      MatTooltipModule , 
      MatProgressBarModule,
      //NgxGraphModule,
      MatLabel,
      MatButtonModule,NgxMatSelectSearchModule
  ],
  providers: [
  ]
})
export class AppMaterialModule { }
