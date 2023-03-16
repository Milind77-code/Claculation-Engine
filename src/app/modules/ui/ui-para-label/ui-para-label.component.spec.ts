import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiParaLabelComponent } from './ui-para-label.component';

describe('UiParaLabelComponent', () => {
  let component: UiParaLabelComponent;
  let fixture: ComponentFixture<UiParaLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiParaLabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiParaLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
