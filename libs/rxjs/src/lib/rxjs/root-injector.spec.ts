import { TestBed } from '@angular/core/testing';

import { RootInjector } from './root-injector';

describe('RootInjectorService', () => {
  let service: RootInjector;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RootInjector);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
