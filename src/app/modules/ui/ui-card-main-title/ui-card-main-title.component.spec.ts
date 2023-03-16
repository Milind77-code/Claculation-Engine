import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiCardMainTitleComponent } from './ui-card-main-title.component';

describe('UiCardMainTitleComponent', () => {
  let component: UiCardMainTitleComponent;
  let fixture: ComponentFixture<UiCardMainTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiCardMainTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiCardMainTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
