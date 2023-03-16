import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiAutoCompleteInputComponent } from './ui-auto-complete-input.component';

describe('UiAutoCompleteInputComponent', () => {
  let component: UiAutoCompleteInputComponent;
  let fixture: ComponentFixture<UiAutoCompleteInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiAutoCompleteInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiAutoCompleteInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
