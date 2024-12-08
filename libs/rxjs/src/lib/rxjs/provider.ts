import {
  APP_INITIALIZER,
  ApplicationRef, EnvironmentInjector,
  EnvironmentProviders, inject,
  makeEnvironmentProviders, Provider, RendererFactory2
} from '@angular/core';
import { RxjsService } from './rxjs.service';
import { RootInjector } from './root-injector';
import { DOCUMENT } from '@angular/common';
import { RXJS_CONFIGURATION, RxjsConfigOptions } from './rxjs_config';

function rxjsFeature<FeatureKind extends RxjsFeatureKind>(
  kind: FeatureKind,
  providers: Provider[],
): RxjsFeature<FeatureKind> {
  return {ɵkind: kind, ɵproviders: providers};
}

export interface RxjsFeature<FeatureKind extends RxjsFeatureKind> {
  ɵkind: FeatureKind;
  ɵproviders: Provider[];
}

export type RxjsConfigurationFeature =
  RxjsFeature<RxjsFeatureKind.RxjsConfigurationFeature>;

export type RxjsFeatures =
  | RxjsConfigurationFeature

export const enum RxjsFeatureKind {
  RxjsConfigurationFeature
}

export function provideNgxOcpRxjs(...features: RxjsFeatures[]): EnvironmentProviders {
  console.log('PROVIDE NGX Ocp Rxjs');
  return makeEnvironmentProviders([
    RxjsService,
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: initRxjsServiceService,
      deps: [ApplicationRef, DOCUMENT, EnvironmentInjector, RendererFactory2]
    },
    features.map((feature) => feature.ɵproviders),
  ]);
}

export function initRxjsServiceService(ref: ApplicationRef, document: Document, injector: EnvironmentInjector, rendererFactory: RendererFactory2) {
  return () =>
    new Promise((resolve, reject) => {
      console.log('before init');
      RootInjector.setInjector(injector);
      const rxjsService = RootInjector.get(RxjsService);
      const options = RootInjector.get(RXJS_CONFIGURATION) || {};

      console.log('before init', rxjsService);

      if (rxjsService) {
        rxjsService.init(ref, document, rendererFactory, options);
      }
      console.log('after init');
      resolve(null);
    });
}

export function withRxjsConfig(options: RxjsConfigOptions): RxjsConfigurationFeature {
  const providers = [{provide: RXJS_CONFIGURATION, useValue: options}];
  return rxjsFeature(RxjsFeatureKind.RxjsConfigurationFeature, providers);
}
