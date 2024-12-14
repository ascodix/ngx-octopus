import { Route } from '@angular/router';
import { RxjsComponent } from './pages/rxjs/rxjs.component';
import { HomeComponent } from './pages/home/home.component';
import { ReadmeComponent } from '@ascodix/ngx-octopus/rxjs';

export const appRoutes: Route[] = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'rxjs', component: ReadmeComponent },
  { path: 'rxjs/viewer', component: RxjsComponent },
 /* {
    path: 'rxjs',
    component: ReadmeComponent,
    children: [{
      path: 'viewer',
      component: RxjsComponent
    }]
  }/*,
  {
    path: '**',
    component: PageNotFoundComponent
  }*/
];
