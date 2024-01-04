import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacuumhomeComponent } from './vacuumhome.component';

describe('VacuumhomeComponent', () => {
  let component: VacuumhomeComponent;
  let fixture: ComponentFixture<VacuumhomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VacuumhomeComponent]
    });
    fixture = TestBed.createComponent(VacuumhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
