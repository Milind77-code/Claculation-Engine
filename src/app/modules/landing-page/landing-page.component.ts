import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  constructor(private router : Router) {}

 ngOnInit() {
    this.router.navigateByUrl('landing/calc-engine/formula-generator')
 };

}
