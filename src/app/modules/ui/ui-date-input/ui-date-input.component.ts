import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ui-date-input',
  templateUrl: './ui-date-input.component.html',
  styleUrls: ['./ui-date-input.component.scss']
})
export class UiDateInputComponent {
  @Input() template: any;
  @Output() selectedValue :EventEmitter<any> = new EventEmitter<any>();
  
  getvalue(event:any,name:any){
    let data={val:event.value,name:name,prop:'date',type:name}
    this.selectedValue.emit(data);
  }
}
