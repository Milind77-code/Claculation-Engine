import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiDeepNavigationButtonsCardComponent } from './ui-deep-navigation-buttons-card.component';

describe('UiDeepNavigationButtonsCardComponent', () => {
  let component: UiDeepNavigationButtonsCardComponent;
  let fixture: ComponentFixture<UiDeepNavigationButtonsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiDeepNavigationButtonsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiDeepNavigationButtonsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
