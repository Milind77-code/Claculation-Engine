import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiFootprintCardComponent } from './ui-footprint-card.component';

describe('UiFootprintCardComponent', () => {
  let component: UiFootprintCardComponent;
  let fixture: ComponentFixture<UiFootprintCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiFootprintCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiFootprintCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
