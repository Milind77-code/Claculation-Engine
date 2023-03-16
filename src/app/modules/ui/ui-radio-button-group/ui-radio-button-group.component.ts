import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ui-radio-button-group',
  templateUrl: './ui-radio-button-group.component.html',
  styleUrls: ['./ui-radio-button-group.component.scss']
})
export class UiRadioButtonGroupComponent {
  @Input() template: any;
  @Output() selectedValue :EventEmitter<any> = new EventEmitter<any>();
  @Input() clearRadio:any;
  radioChange(event:any,type:any){
    let val=event.source.value;
    let data={val:event.source.value,type:type,prop:'radio'}
    this.selectedValue.emit(data);
  }


  ngDoCheck(changes: SimpleChanges){
  
    if(this.clearRadio){
      this.clear_radio();
    }
  }


  clear_radio(): void {
    var ele = document.getElementsByName("ghgName");
    // for(var i=0;i<ele.length;i++) {
    //   var element = ele[i] as HTMLInputElement;
    //   element.checked = false;
    //  }
   }
}
