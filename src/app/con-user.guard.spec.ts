import { TestBed, async, inject } from '@angular/core/testing';

import { ConUserGuard } from './con-user.guard';

describe('ConUserGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConUserGuard]
    });
  });

  it('should ...', inject([ConUserGuard], (guard: ConUserGuard) => {
    expect(guard).toBeTruthy();
  }));
});
