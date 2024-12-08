import { Route } from '@angular/router';
import { RxjsComponent } from './pages/rxjs/rxjs.component';

export const appRoutes: Route[] = [
  {
    path: 'rxjs',
    component: RxjsComponent },
  {
    path: '**',
    redirectTo: 'rxjs'
  }
];
