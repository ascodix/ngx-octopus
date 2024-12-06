import { TestBed } from '@angular/core/testing';
import { RootInjector } from './root-injector';
import { RxjsService } from './rxjs.service';
import { EnvironmentInjector, } from '@angular/core';

describe('RootInjector', () => {
  let rxjsService: RxjsService;
  let environmentInjector: EnvironmentInjector;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RxjsService,
        EnvironmentInjector
      ]
    });

    environmentInjector = TestBed.inject(EnvironmentInjector);
  });

  it('should be created', () => {
    RootInjector.setInjector(environmentInjector);
    rxjsService = RootInjector.get(RxjsService)!;
    expect(rxjsService).toBeTruthy();
  });
});
