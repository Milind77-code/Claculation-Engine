import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiTemplateCardComponent } from './ui-template-card.component';

describe('UiTemplateCardComponent', () => {
  let component: UiTemplateCardComponent;
  let fixture: ComponentFixture<UiTemplateCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiTemplateCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiTemplateCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
