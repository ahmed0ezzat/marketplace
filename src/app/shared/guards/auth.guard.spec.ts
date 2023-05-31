import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { guardsGuard } from './auth.guard';

describe('guardsGuard', () => {
  const executeGuard: CanActivateFn = () => 
      TestBed.runInInjectionContext(() => guardsGuard());

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
