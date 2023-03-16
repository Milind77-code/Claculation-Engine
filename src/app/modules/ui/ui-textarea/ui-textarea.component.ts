import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ui-textarea',
  templateUrl: './ui-textarea.component.html',
  styleUrls: ['./ui-textarea.component.scss']
})
export class UiTextareaComponent {

  @Input() template: any;
  @Output() selectedValue :EventEmitter<any> = new EventEmitter<any>();
  disable: any;
  questionText:any;

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
      this.template.ngModel=event.value;
      console.log("inside text",event.value,this.template);
      this.selectedValue.emit(this.template);
      
    }

}
