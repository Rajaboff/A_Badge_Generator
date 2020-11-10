import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeTypeSelectComponent } from './badge-type-select.component';

describe('BadgeTypeSelectComponent', () => {
  let component: BadgeTypeSelectComponent;
  let fixture: ComponentFixture<BadgeTypeSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgeTypeSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgeTypeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
