import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from './theme/components/sidenav/sidenav.component';
import { ToolbarComponent } from './theme/components/toolbar/toolbar.component';

@Component({
  standalone: true,
  imports: [RouterModule, SidenavComponent, ToolbarComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'app-demo';
}
