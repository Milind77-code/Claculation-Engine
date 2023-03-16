import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiMultiSelectDpdComponent } from './ui-multi-select-dpd.component';

describe('UiMultiSelectDpdComponent', () => {
  let component: UiMultiSelectDpdComponent;
  let fixture: ComponentFixture<UiMultiSelectDpdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiMultiSelectDpdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiMultiSelectDpdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
