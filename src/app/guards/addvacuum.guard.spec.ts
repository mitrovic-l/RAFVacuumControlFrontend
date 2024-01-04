import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { addvacuumGuard } from './addvacuum.guard';

describe('addvacuumGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => addvacuumGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
