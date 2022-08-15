import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircuitoScrollComponent } from './circuito-scroll.component';

describe('CircuitoScrollComponent', () => {
  let component: CircuitoScrollComponent;
  let fixture: ComponentFixture<CircuitoScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircuitoScrollComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CircuitoScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
