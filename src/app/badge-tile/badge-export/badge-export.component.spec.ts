import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeExportComponent } from './badge-export.component';

describe('BadgeExportComponent', () => {
  let component: BadgeExportComponent;
  let fixture: ComponentFixture<BadgeExportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgeExportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgeExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
