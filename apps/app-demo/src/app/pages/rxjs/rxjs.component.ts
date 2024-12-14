import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { draw, RxjsViewerComponent, RxjsViewerItemComponent } from '@ascodix/ngx-octopus/rxjs';

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
  public observableName = 'Observable de test 1'

  constructor() {
    this.event1Obs$
      .pipe(
        draw(this.observableName)
      )
      .subscribe((value) => {
        console.log('EVENT VALUE ', value);
      });
  }

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
        draw('Observable de test')
      )
      .subscribe((value) => {
        console.log('EVENT VALUE ', value);
      });
  }
}
