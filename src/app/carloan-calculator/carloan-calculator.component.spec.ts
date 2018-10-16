import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarloanCalculatorComponent } from './carloan-calculator.component';

describe('CarloanCalculatorComponent', () => {
  let component: CarloanCalculatorComponent;
  let fixture: ComponentFixture<CarloanCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarloanCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarloanCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
