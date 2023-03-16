import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiRadioButtonGroupComponent } from './ui-radio-button-group.component';

describe('UiRadioButtonGroupComponent', () => {
  let component: UiRadioButtonGroupComponent;
  let fixture: ComponentFixture<UiRadioButtonGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiRadioButtonGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiRadioButtonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
