import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkAccordion, CdkAccordionItem } from '@angular/cdk/accordion';
import { RxjsService } from '../rxjs.service';
import { RxjsViewerItemComponent } from '../rxjs-viewer-item/rxjs-viewer-item.component';

@Component({
  selector: 'lib-rxjs-viewer',
  standalone: true,
  imports: [
    CommonModule,
    CdkAccordion,
    CdkAccordionItem,
    RxjsViewerItemComponent,
  ],
  templateUrl: './rxjs-viewer.component.html',
  styleUrl: './rxjs-viewer.component.scss',
})
export class RxjsViewerComponent {
  public items: any[] = [];

  constructor(private rxjsService: RxjsService) {
    this.rxjsService.draw.subscribe(() => {
      this.items.push('Observable 1');
    });
  }
}
