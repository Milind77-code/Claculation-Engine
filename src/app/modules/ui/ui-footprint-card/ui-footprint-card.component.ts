import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ui-footprint-card',
  templateUrl: './ui-footprint-card.component.html',
  styleUrls: ['./ui-footprint-card.component.scss']
})
export class UiFootprintCardComponent {
  @Input() template: any;

}
