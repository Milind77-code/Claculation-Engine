import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiFormFieldLabelComponent } from './ui-form-field-label.component';

describe('UiFormFieldLabelComponent', () => {
  let component: UiFormFieldLabelComponent;
  let fixture: ComponentFixture<UiFormFieldLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiFormFieldLabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiFormFieldLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
