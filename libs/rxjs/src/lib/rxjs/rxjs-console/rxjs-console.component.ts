import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkAccordion, CdkAccordionItem } from '@angular/cdk/accordion';
import { RxjsViewerComponent } from '../rxjs-viewer/rxjs-viewer.component';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { MatMiniFabButton } from '@angular/material/button';

@Component({
  selector: 'lib-rxjs-console',
  standalone: true,
  imports: [
    CommonModule,
    CdkAccordion,
    CdkAccordionItem,
    RxjsViewerComponent,
    MatIcon,
    MatToolbar,
    MatMiniFabButton,
  ],
  templateUrl: './rxjs-console.component.html',
  styleUrl: './rxjs-console.component.scss',
})
export class RxjsConsoleComponent {}
