import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-ui-auto-complete-input',
  templateUrl: './ui-auto-complete-input.component.html',
  styleUrls: ['./ui-auto-complete-input.component.scss'],
})
export class UiAutoCompleteInputComponent {
  @Output() selctedOrgName :EventEmitter<any> = new EventEmitter<any>();
  @Output() selectedValue :EventEmitter<any> = new EventEmitter<any>()
  @Input() template: any;
  myControl = new FormControl('');
  filteredOptions!: Observable<string[]>;
  options :any;
  name:any;
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option: string) => option.toLowerCase().includes(filterValue));
  }

  constructor()
  {}
  ngOnInit(){
    this.options=['1','2'];
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   this.template = changes['template']?.currentValue;
  //   // console.log(this.template);
  //   //console.log("change",this.template);
  //   //this.selectedValue.emit(this.template);
  // }
  getvalue(event:any){
    this.template.selected_value=event.value;
    console.log("inside text",event.value,this.template);
    this.selectedValue.emit(this.template);
  }
  onSelect(event: any){
    console.log("inside mat auto"+event);
   let data={val:event,}
    this.selctedOrgName.emit(event);
  }
}
