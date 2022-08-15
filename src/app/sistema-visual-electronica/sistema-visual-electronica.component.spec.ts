import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemaVisualElectronicaComponent } from './sistema-visual-electronica.component';

describe('SistemaVisualElectronicaComponent', () => {
  let component: SistemaVisualElectronicaComponent;
  let fixture: ComponentFixture<SistemaVisualElectronicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SistemaVisualElectronicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SistemaVisualElectronicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
