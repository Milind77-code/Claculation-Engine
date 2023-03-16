import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ui-multi-select-dpd',
  templateUrl: './ui-multi-select-dpd.component.html',
  styleUrls: ['./ui-multi-select-dpd.component.scss']
})
export class UiMultiSelectDpdComponent {
  @Input() template: any;
  @Output() selectedValue :EventEmitter<any> = new EventEmitter<any>()

  onSelect(event: any,type:any,textname:any){
    console.log(""+event);
    if (event.isUserInput) { 
    let data={val:event.source.value,type:type,prop:'dpd',name:textname}
    this.selectedValue.emit(data);
    }
  }
}
