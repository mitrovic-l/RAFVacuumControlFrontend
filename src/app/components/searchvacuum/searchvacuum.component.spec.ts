import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchvacuumComponent } from './searchvacuum.component';

describe('SearchvacuumComponent', () => {
  let component: SearchvacuumComponent;
  let fixture: ComponentFixture<SearchvacuumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchvacuumComponent]
    });
    fixture = TestBed.createComponent(SearchvacuumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
