import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { map, startWith, take, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-ui-dropdown-search',
  templateUrl: './ui-dropdown-search.component.html',
  styleUrls: ['./ui-dropdown-search.component.scss']
})
export class UiDropdownSearchComponent {

   @Input() template: any;
   @Input() templateFrom: any;
   @Output() selectedValue: EventEmitter<any> = new EventEmitter<any>();
   @Input() set data(data: any[]) {
    this._data = data;
    // load the initial entity list
    this.filteredOptions.next(this.data.slice());
  }
  get data(): any[] {
    return this._data;
  }
  private _data: any[] = [];

   optionsArr=[];
   /** control for the selected bank */
   public myCtrl: FormControl = new FormControl(); 
   /** control for the MatSelect filter keyword */
   public myFilterCtrl: FormControl = new FormControl(); 
   /** list of optionsArr filtered by search keyword */
   public filteredOptions: ReplaySubject<any> = new ReplaySubject<any>(1);
 
   @ViewChild('singleSelect', { static: true }) singleSelect: MatSelect | undefined;
 
   /** Subject that emits when the component has been destroyed. */
   protected _onDestroy = new Subject<void>();
 
 
   constructor() { }
 
  //  ngOnInit() {
  //   this.optionsArr=this.template.options;
  //    this.filteredOptions.next(this.optionsArr.slice());
    
  //    // listen for search field value changes
  //   //  this.myFilterCtrl.valueChanges
  //   //    .pipe(takeUntil(this._onDestroy))
  //   //    .subscribe(() => {
  //   //      this.filterEntities();
  //   //    });
  //  }
   ngOnInit(): void {
    // listen for search field value changes
    this.myFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterEntities();
      });

  }
   valueChange(event: any){
    this.filterEntities();
   }
    setInitialValue() {
    this.filteredOptions
      .pipe(take(1), takeUntil(this._onDestroy))
      .subscribe(() => {
        // setting the compareWith property to a comparison function
        // triggers initializing the selection according to the initial value of
        // the form control (i.e. _initializeSelection())
        // this needs to be done after the filteredEntities are loaded initially
        // and after the mat-option elements are available
        if(this.singleSelect)
          this.singleSelect.compareWith = (a: any, b: any) => a[this.template.dropdownValueKey] === b[this.template.dropdownValueKey];
      });
  }
  // ngAfterViewInit(): void {
  //   this.setInitialValue();
  // }
   ngOnDestroy() {
     this._onDestroy.next();
     this._onDestroy.complete();
   }
 
   
   filterEntities() {
     if (!this.data) {
       return;
     }
     // get the search keyword
     let search = this.myFilterCtrl.value;
     if (!search) {
       this.filteredOptions.next(this.data.slice());
       return;
     } else {
       search = search.toLowerCase();
     }
     // filter the optionsArr
     this.filteredOptions.next(
       this.data.filter(bank => bank[this.template.dropdownTextKey].toLowerCase().indexOf(search) > -1)
     );
   }

   onChange(event: any,type: any){
    console.log("change",event)
   }
   onSelect(event: any,type: any,textname: any){
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
