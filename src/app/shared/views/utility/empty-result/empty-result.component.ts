import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'empty-result',
  template: `
    <div class="object-card shadow-md">
      <p tabindex="0">No results containing all your search terms were found.</p>
      <p *ngIf="query != ''" tabindex="0">
        Your search - {{ query }} - did not match any documents.
      </p>

      <strong tabindex="0">Suggestions:</strong>
      <ul tabindex="0">
        <li>Make sure that all words are spelled correctly.</li>
        <li>Try different keywords.</li>
        <li>Try more general keywords.</li>
        <li>Try fewer keywords.</li>
      </ul>
    </div>
  `,
  styles: [``],
})
export class EmptyResultComponent implements OnInit {
  @Input()
  query = '';

  constructor() { }

  ngOnInit(): void { }
}
