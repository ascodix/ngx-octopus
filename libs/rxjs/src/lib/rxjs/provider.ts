import {
  APP_INITIALIZER,
  ApplicationRef, ComponentRef, EnvironmentInjector,
  EnvironmentProviders,
  inject, Injector,
  makeEnvironmentProviders, RendererFactory2, runInInjectionContext
} from '@angular/core';
import { RxjsService } from './rxjs.service';
import { RootInjector } from './root-injector';
import { DOCUMENT } from '@angular/common';

export function provideNgxOcpRxjs(): EnvironmentProviders {
  console.log('PROVIDE NGX Ocp Rxjs');
  return makeEnvironmentProviders([
    RxjsService,
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: initRxjsServiceService,
      deps: [ApplicationRef, DOCUMENT, EnvironmentInjector, RendererFactory2]
    }
  ]);
}

  export function initRxjsServiceService(ref: ApplicationRef, document: Document, injector: EnvironmentInjector, rendererFactory: RendererFactory2) {
    return () =>
      new Promise((resolve, reject) => {
        console.log('before init', rendererFactory);
        RootInjector.setInjector(injector);
        const rxjsService = RootInjector.get(RxjsService);

        if (rxjsService) {
          rxjsService.init(ref, document, rendererFactory);
        }
        console.log('after init');
        resolve(null);
      });
  }

export function getBootstrapListener() {
  return (bootstrappedComponentRef: ComponentRef<unknown>) => {
    const injector = inject(Injector);
    runInInjectionContext(injector, () => {
      const ref = injector.get(ApplicationRef);
      console.log('ICI');
    })


  }

};
