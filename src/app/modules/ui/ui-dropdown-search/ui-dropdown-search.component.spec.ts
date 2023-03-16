import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiDropdownSearchComponent } from './ui-dropdown-search.component';

describe('UiDropdownSearchComponent', () => {
  let component: UiDropdownSearchComponent;
  let fixture: ComponentFixture<UiDropdownSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiDropdownSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiDropdownSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
