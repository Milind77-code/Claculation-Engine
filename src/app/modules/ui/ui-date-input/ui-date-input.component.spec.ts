import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiDateInputComponent } from './ui-date-input.component';

describe('UiDateInputComponent', () => {
  let component: UiDateInputComponent;
  let fixture: ComponentFixture<UiDateInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiDateInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiDateInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
