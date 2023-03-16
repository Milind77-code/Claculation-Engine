import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-ui-bar-charts',
  templateUrl: './ui-bar-charts.component.html',
  styleUrls: ['./ui-bar-charts.component.scss']
})
export class UiBarChartsComponent {

  @Input() template:any;
  @Input() chartdata:any;
  @Input() chartType:any;


  ngOnInit(){
    
  }
  ngAfterViewInit(): void{
  //  console.log("chart",this.chartType,this.chartdata)
   // this.convertDataIntoChartForm(this.chartdata,this.chartType)
  }



}
