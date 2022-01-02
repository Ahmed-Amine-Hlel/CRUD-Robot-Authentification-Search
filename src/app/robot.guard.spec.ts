import { TestBed } from '@angular/core/testing';

import { RobotGuard } from './robot.guard';

describe('RobotGuard', () => {
  let guard: RobotGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RobotGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
