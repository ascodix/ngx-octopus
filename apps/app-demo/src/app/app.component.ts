import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from './theme/components/sidenav/sidenav.component';

@Component({
  standalone: true,
  imports: [RouterModule, SidenavComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'app-demo';
}
