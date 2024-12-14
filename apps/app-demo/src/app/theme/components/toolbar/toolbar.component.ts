import { Component } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { MatMenu, MatMenuItem } from '@angular/material/menu';
import { MatToolbar } from '@angular/material/toolbar';
import { MatTooltip } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { SideNavService } from '../../../services/side-nav.service';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    MatDivider,
    MatIcon,
    MatIconButton,
    MatMenu,
    MatMenuItem,
    MatToolbar,
    MatTooltip,
    RouterLink,
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
})
export class ToolbarComponent {


  constructor(private sideNavService: SideNavService) {
  }

  clickMenu() {
    this.sideNavService.toggle();
  }
}
