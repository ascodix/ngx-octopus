import { ApplicationRef, createComponent, inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { RxjsConsoleComponent } from '@ngx-octopus/rxjs';
import { BehaviorSubject, filter, take } from 'rxjs';
import { RXJS_CONFIGURATION, RxjsConfigOptions } from './rxjs_config';


@Injectable({
  providedIn: 'root',
})
export class RxjsService {

  private draw$ = new BehaviorSubject(null);
  public draw = this.draw$.asObservable();

  applicationRef: ApplicationRef | undefined;
  document: Document | undefined;
  renderer: Renderer2 | undefined;
  options: RxjsConfigOptions | undefined;

  constructor() {
  }

  public trace() {
    console.log('TRACE');
    this.draw$.next(null);
  }

  init(applicationRef: ApplicationRef, document: Document, rendererFactory: RendererFactory2, options: RxjsConfigOptions) {
    console.log('INIT');
    this.applicationRef = applicationRef;
    this.document = document;
    this.renderer = rendererFactory.createRenderer(null, null);
    this.options = options;

    if (options.console) {
      this.createConsole();
    }
  }

  private createConsole() {
    if (this.applicationRef) {
      this.applicationRef.isStable.pipe(filter((value) => value === true), take(1)).subscribe((value) => {

        if (value) {

          // Locate a DOM node that would be used as a host.
          const hostElement: Element = document.body.children[0];
          const consoleElement = this.renderer?.createElement('div');
          consoleElement.classList.add("rxjs-console");
          this.renderer?.insertBefore(hostElement, consoleElement, null);

          // Get an `EnvironmentInjector` instance from the `ApplicationRef`.
          const environmentInjector = this.applicationRef!.injector;

          // We can now create a `ComponentRef` instance.
          const componentRef = createComponent(RxjsConsoleComponent, { hostElement: consoleElement, environmentInjector});

          // Last step is to register the newly created ref using the `ApplicationRef` instance // to include the component view into change detection cycles.
          this.applicationRef!.attachView(componentRef.hostView);
          componentRef.changeDetectorRef.detectChanges();
        }

      })
    }
  }
}
