import { TestBed } from '@angular/core/testing';

import { TooEasyService } from './too-easy.service';

describe('TooEasyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TooEasyService = TestBed.get(TooEasyService);
    expect(service).toBeTruthy();
  });
});
