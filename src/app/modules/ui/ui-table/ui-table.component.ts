import { Component, ContentChildren, Directive, ElementRef, EventEmitter, HostListener, Input, Output, QueryList, SimpleChange, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Sort } from '@angular/material/sort';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Directive({
  selector: '[tableColumn]'
})
export class TableColumnDirective {

  constructor(public readonly template: TemplateRef<any>) { }

  @Input('tableColumn') columnName!: string;
}

@Component({
  selector: 'app-ui-table',
  templateUrl: './ui-table.component.html',
  styleUrls: ['./ui-table.component.scss']
})
export class UiTableComponent {
  @ViewChild('search')
  searchElement!: ElementRef;
  @Input() columnDef: any;
  @Input() dataSource: any;
  @Input() displayedColumns: any;

  @Output() showDataElement: EventEmitter<any> = new EventEmitter<any>();
  @Output() editDataElement: EventEmitter<any> = new EventEmitter<any>();
  @Output() deleteDataElement: EventEmitter<any> = new EventEmitter<any>();
  @Output() connectDataElement: EventEmitter<any> = new EventEmitter<any>();
  @ContentChildren(TableColumnDirective) columnList!: QueryList<TableColumnDirective>;
  
  sortedData: any;
  colFilter = new FormControl();
  currentColm: any;
  filterValues: any;
  filteredRequests: any;
  samp: any;
  dsCopy: any;
  sort: any;
  show_filter: any;
  selectedRow: any;
  dataSourceCopy: any;
  len: any;
  colName: any;
  @HostListener('document:click', ['$event']) onDocumentClick(event: any) {
    this.show_filter=false;
  }
  constructor(public dialog: MatDialog) {
    this.sortedData = this.dataSource;

  }

  ngOnChanges() {

    this.len = false;
    this.dsCopy = this.dataSource;
    this.samp = new MatTableDataSource(this.dataSource);
  }
  ngOnInit(): void {
    this.dataSourceCopy = this.dataSource;

  }

  passColHead(col: any) {
    this.currentColm = col;
  }
  showData(element: any) {
    this.showDataElement.emit(element)
  }
  editData(element: any) {
    this.editDataElement.emit(element);
  }

  deleteData(element: any) {
    this.deleteDataElement.emit(element);
  }
  connectData(element: any) {
    this.connectDataElement.emit(element);
  }
  sortData(sort: Sort) {
    this.sort = sort;
    this.dataSource = this.dsCopy;
    if (!sort.active || sort.direction === '') {
      this.sortedData = Object.keys(this.dataSource).map((_) => { return this.dataSource[_]; })
      return;
    }
    this.sortedData = Object.keys(this.dataSource).map((_) => { return this.dataSource[_]; })
    let colHead = Object.keys(this.columnDef).map((_) => { return this.columnDef[_]; })
    this.sortedData = this.sortedData.sort((a: any, b: any) => {
      const isAsc = sort.direction === 'asc';
      for (let i = 0; i < colHead[0].length; i++) {
        if (sort.active == colHead[0][i]) {
          let item = colHead[0][i];
          return compare(a[item], b[item], isAsc);
        }
      }
      return false;
    });
    this.dataSource = this.sortedData;
  }
  applyFilter(filterValue: any, col: any) {

    this.dataSource = this.dsCopy;
    console.log(this.dataSource);

    filterValue = filterValue.target.value;
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();

    console.log('filterValue', filterValue);
    if (filterValue != '') {
      this.samp.filter = filterValue;
      //this.dataSource =this.samp;
      this.len = this.samp.length ? false : true;
      console.log("filter value present datasource", this.dataSource);
      this.colFilter = col;
      this.dataSource = this.dataSource.filter((x: { [x: string]: { toString: () => string; }; }) => x[col].toString().toLowerCase().includes(filterValue));
    
    }
    else {
      this.dataSource = this.dsCopy;
      console.log("filter value empty datasource", this.dataSource);
      console.log("filter value empty");
    }

  }

  smallval(ele_val: number) {
    return ele_val <= 40
  }
  filterTable(col: string | number, filter: any) {
    this.dataSource = this.dataSource.filter((x: { [x: string]: string; }) => x[col].toLocaleLowerCase().includes(filter));

    // this.dataSource.filterPredicate = (data: this['columnDef']['colDesc'], filter: string) => {
    //   if(filter){
    //     var temp=data[col].toLocaleLowerCase().includes(filter);
    //     return temp
    //   }

    // }
  }
  showFilter(name:any,event: { stopPropagation: () => void; }) {
    event.stopPropagation();    
    this.colName=name;
    this.show_filter = !this.show_filter;
    setTimeout(()=>{ // this will make the execution after the above boolean has changed
      this.searchElement.nativeElement.focus();
    },10); 
    if(!this.show_filter){
      this.dataSource = this.dsCopy;
            
    
    }
    
  }
  getRecord(row: any) {
    console.log(row);

  }
}

function compare(a: string, b: string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}