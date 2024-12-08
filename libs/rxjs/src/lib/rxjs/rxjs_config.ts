import { InjectionToken } from '@angular/core';

export interface RxjsConfigOptions {
  console?: boolean;
}

export const RXJS_CONFIGURATION = new InjectionToken<RxjsConfigOptions>(
  /*typeof ngDevMode === 'undefined' || ngDevMode ? 'rxjs config' : '',*/
  'rxjsconfig',
  {
    providedIn: 'root',
    factory: () => ({}),
  },
);
