import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquationSpecComponent } from './equation-spec.component';

describe('EquationSpecComponent', () => {
  let component: EquationSpecComponent;
  let fixture: ComponentFixture<EquationSpecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquationSpecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquationSpecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
