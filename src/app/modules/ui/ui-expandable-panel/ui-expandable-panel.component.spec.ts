import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiExpandablePanelComponent } from './ui-expandable-panel.component';

describe('UiExpandablePanelComponent', () => {
  let component: UiExpandablePanelComponent;
  let fixture: ComponentFixture<UiExpandablePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiExpandablePanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiExpandablePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
