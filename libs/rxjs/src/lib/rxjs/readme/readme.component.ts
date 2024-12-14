import { Component, Inject } from '@angular/core';
import { MarkdownComponent } from 'ngx-markdown';
import { DOCUMENT } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'lib-readme',
  standalone: true,
  imports: [MarkdownComponent, RouterOutlet],
  templateUrl: './readme.component.html',
  styleUrl: './readme.component.scss',
})
export class ReadmeComponent {
  public src: string;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.src = `http://${this.document.location.host}/libs/rxjs/README.md`;
  }
}
