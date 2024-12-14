import { Component, Inject } from '@angular/core';
import { MarkdownComponent } from 'ngx-markdown';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MarkdownComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

  public src: string;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.src = `http://${this.document.location.host}/README.md`;
  }
}
