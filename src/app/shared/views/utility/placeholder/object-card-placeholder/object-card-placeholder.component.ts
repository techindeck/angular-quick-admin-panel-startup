import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'object-card-placeholder',
  templateUrl: './object-card-placeholder.component.html',
  styleUrls: ['./object-card-placeholder.component.scss'],
})
export class ObjectCardPlaceholderComponent implements OnInit {
  times: number = 10;
  constructor() {}

  ngOnInit(): void {}
}
