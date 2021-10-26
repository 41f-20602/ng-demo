import { TestBed } from '@angular/core/testing';

import { GardienAuthGuard } from './gardien-auth.guard';

describe('GardienAuthGuard', () => {
  let guard: GardienAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GardienAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
