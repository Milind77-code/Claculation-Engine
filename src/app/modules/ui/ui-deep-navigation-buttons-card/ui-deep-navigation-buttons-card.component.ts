import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ui-deep-navigation-buttons-card',
  templateUrl: './ui-deep-navigation-buttons-card.component.html',
  styleUrls: ['./ui-deep-navigation-buttons-card.component.scss']
})
export class UiDeepNavigationButtonsCardComponent {
  @Input() template: any;
  @Output() outputNav :EventEmitter<any> = new EventEmitter<any>()
  constructor(private router:Router){}
  loadRoute(item: any) {
    this.router.navigate([item.link], { replaceUrl: true });
    this.outputNav.emit(item);
    //this.router.navigateByUrl(link) 
  }
}
