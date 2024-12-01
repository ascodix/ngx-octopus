import { ApplicationRef, createComponent, Injectable } from '@angular/core';
import { RxjsConsoleComponent } from '@ngx-octopus/rxjs';
import { BehaviorSubject, filter, take } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class RxjsService {

  private draw$ = new BehaviorSubject(null);
  public draw = this.draw$.asObservable();

  applicationRef: ApplicationRef | undefined;
  document: Document | undefined;

  constructor() {
  }

  public trace() {
    console.log('TRACE');
    this.draw$.next(null);
  }

  init(applicationRef: ApplicationRef, document: Document) {
    this.applicationRef = applicationRef;
    this.document = document;

    this.applicationRef.isStable.pipe(filter((value) => value === true), take(1)).subscribe((value) => {

      if (value) {

        // Locate a DOM node that would be used as a host.
        const hostElement = document.body.children[0];

        // Get an `EnvironmentInjector` instance from the `ApplicationRef`.
        const environmentInjector = this.applicationRef!.injector;

        // We can now create a `ComponentRef` instance.
        if (hostElement) {
          const componentRef = createComponent(RxjsConsoleComponent, {hostElement, environmentInjector});

          // Last step is to register the newly created ref using the `ApplicationRef` instance // to include the component view into change detection cycles.
          this.applicationRef!.attachView(componentRef.hostView);
          componentRef.changeDetectorRef.detectChanges();
        }
      }

    })




  }
}
