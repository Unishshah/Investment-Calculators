import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingrateComponent } from './savingrate.component';

describe('SavingrateComponent', () => {
  let component: SavingrateComponent;
  let fixture: ComponentFixture<SavingrateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavingrateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
