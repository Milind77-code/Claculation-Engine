import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-ui-dropdown-field',
  templateUrl: './ui-dropdown-field.component.html',
  styleUrls: ['./ui-dropdown-field.component.scss']

})
export class UiDropdownFieldComponent {

  @Input() template: any;
  @Input() templateFrom: any;
  @Output() selectedValue: EventEmitter<any> = new EventEmitter<any>()

  ngOnChanges(changes: SimpleChanges): void {
    this.template = changes['template']?.currentValue;
    // console.log(this.template);
    //console.log("change",this.template);
    this.selectedValue.emit(this.template);
  }

  ActivityTypeList = [{ "type": "Packaging", "name": "PET Packaging " }];

 

  onSelect(event: any, type: any, textname: any) {
    console.log("" + event);
    if (this.templateFrom == "popup") {
      if (event.source._selected) {
        let data = { val: event.source.value, type: type, prop: 'dpd', name: textname }
        this.selectedValue.emit(data);
      }
    }
    else{
      if (event.isUserInput) {
        let data = { val: event.source.value, type: type, prop: 'dpd', name: textname }
        this.selectedValue.emit(data);
      }
    }

  }
}
interface Food {
  value: string;
  viewValue: string;
}