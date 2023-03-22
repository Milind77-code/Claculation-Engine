import { Component } from '@angular/core';

@Component({
  selector: 'app-ui-expandable-panel',
  templateUrl: './ui-expandable-panel.component.html',
  styleUrls: ['./ui-expandable-panel.component.scss']
})
export class UiExpandablePanelComponent {
  panelOpenState = false;
  isExpanded = false;
  headerTextColor = 'black';
  onExpandedChange(isExpanded: boolean): void {
    this.isExpanded = isExpanded;
    this.headerTextColor = this.isExpanded ? 'red' : 'green';
  }
  constructor() { }

  ngOnInit(): void {
  }
}
