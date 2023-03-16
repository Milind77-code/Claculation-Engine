import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiBarChartsComponent } from './ui-bar-charts.component';

describe('UiBarChartsComponent', () => {
  let component: UiBarChartsComponent;
  let fixture: ComponentFixture<UiBarChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiBarChartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiBarChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
