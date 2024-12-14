import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { SideNavService } from '../../../services/side-nav.service';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatButtonModule,
    MatTooltipModule,
    RouterModule
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent implements OnInit {

  @ViewChild('sidenav') public sidenav: MatSidenav | undefined;

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer, private sideNavService: SideNavService) {
    this.matIconRegistry.addSvgIcon(
      `rxjs`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`icons/rxjs.svg`)
    );
  }

  ngOnInit() {
    this.sideNavService.sideNavToggleSubject.subscribe(()=> {
      this.sidenav!.toggle();
    });
  }
}
