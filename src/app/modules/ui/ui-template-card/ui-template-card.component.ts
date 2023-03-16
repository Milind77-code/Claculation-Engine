import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ui-template-card',
  templateUrl: './ui-template-card.component.html',
  styleUrls: ['./ui-template-card.component.scss']
})
export class UiTemplateCardComponent {
  @Input() template: any;
}
