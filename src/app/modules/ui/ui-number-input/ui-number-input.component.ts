import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-ui-number-input',
  templateUrl: './ui-number-input.component.html',
  styleUrls: ['./ui-number-input.component.scss']
})
export class UiNumberInputComponent {
  @Input() template: any;
  @Output() selectedValue :EventEmitter<any> = new EventEmitter<any>();
  disable: any;
  stringg: string | undefined;
  rateControl: any;

 onInint(){
  this.template?.disable ? this.disable = this.template.disable : this.disable = false;
  this.rateControl = new FormControl("", [Validators.max(100), Validators.min(0)])
 }
  getFormValue(): any {

    if (this.template.value) {
    
      return this.template.value;
    } 
  }

  getvalue(event:any){
    //this.template.selected_value=event.value;
    console.log( this.template);
    this.selectedValue.emit(this.template);
    
  }
  enforceMinMax(el: any) {
    if (el.target.value != "") {
      if (parseInt(el.target.value) < 0) {
        this.template.ngModel= 0; 
        
        //this.getvalue(el.target);    
          
      }
      if (parseInt(el.target.value) > 100) {
        this.template.ngModel= 100;
        //this.getvalue(el.target);  
       
      }      
    }
    this.getvalue(el.target); 
  }
}
