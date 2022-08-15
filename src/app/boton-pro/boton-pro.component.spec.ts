import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonProComponent } from './boton-pro.component';

describe('BotonProComponent', () => {
  let component: BotonProComponent;
  let fixture: ComponentFixture<BotonProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonProComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
