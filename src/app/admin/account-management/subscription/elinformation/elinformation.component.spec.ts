import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElinformationComponent } from './elinformation.component';

describe('ElinformationComponent', () => {
  let component: ElinformationComponent;
  let fixture: ComponentFixture<ElinformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElinformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
