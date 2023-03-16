import { Component, EventEmitter, Input, Output, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ui-button',
  templateUrl: './ui-button.component.html',
  styleUrls: ['./ui-button.component.scss']
})

export class UiButtonComponent {
  @Input() template: any;
  @Output() onClickFun :EventEmitter<any> = new EventEmitter<any>();
  disable: any;
  isFlat: any;
  constructor(){
   
  }
  ngOnInint(){
   
  }

 
 onClick(event:any){
  // this.template.selected_value=event.value;
  // this.template.ngModel=event.value;
  // console.log("inside text",event.value,this.template);
  this.onClickFun.emit(this.template);  
  }

}