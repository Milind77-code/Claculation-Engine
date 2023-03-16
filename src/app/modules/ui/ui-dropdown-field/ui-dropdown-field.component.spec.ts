import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiDropdownFieldComponent } from './ui-dropdown-field.component';

describe('UiDropdownFieldComponent', () => {
  let component: UiDropdownFieldComponent;
  let fixture: ComponentFixture<UiDropdownFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiDropdownFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiDropdownFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
