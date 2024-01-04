import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { norolesGuard } from './noroles.guard';

describe('norolesGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => norolesGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
