import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { BasketGuard } from './basket-guard';

describe('basketGuardGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => BasketGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
