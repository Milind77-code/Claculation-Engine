import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ui-text-input',
  templateUrl: './ui-text-input.component.html',
  styleUrls: ['./ui-text-input.component.scss']
})
export class UiTextInputComponent {

  @Input() template: any;
  @Output() selectedValue :EventEmitter<any> = new EventEmitter<any>();
  disable: any;

 onInint(){
  this.template?.disable ? this.disable = this.template.disable : this.disable = false;
 }
  getFormValue(): any {

    if (this.template.value) {
    
      return this.template.value;
    } 
  }

  getvalue(event:any){
    this.template.selected_value=event.value; 
    this.selectedValue.emit(this.template);
    
  }
}
