import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject, tap } from 'rxjs';
import { draw, RxjsViewerComponent, RxjsViewerItemComponent } from '@ngx-octopus/rxjs';

@Component({
  selector: 'app-rxjs',
  standalone: true,
  imports: [CommonModule, RxjsViewerComponent, RxjsViewerItemComponent],
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.scss',
})
export class RxjsComponent {
  private event1Value = 0;
  private event1Obs$ = new Subject<number>();

  constructor() {}

  onEvent1Click() {
    this.event1Value += 1;
    this.event1Obs$.next(this.event1Value);
  }

  onDisplayDebugger() {
    if (this.event1Obs$) {
      this.event1Obs$.unsubscribe();
    }
    this.event1Obs$ = new Subject<number>();

    this.event1Obs$
      .pipe(
        tap(() => {
          console.log('ICI');
        }),
        draw('Observable de test')
      )
      .subscribe((value) => {
        console.log('EVENT VALUE ', value);
      });
  }
}
