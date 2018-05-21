import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LossDetailsReportComponent } from './loss-details-report.component';

describe('LossDetailsReportComponent', () => {
  let component: LossDetailsReportComponent;
  let fixture: ComponentFixture<LossDetailsReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LossDetailsReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LossDetailsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
