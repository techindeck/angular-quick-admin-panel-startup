import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-object-table-placeholder',
  templateUrl: './object-table-placeholder.component.html',
  styleUrls: ['./object-table-placeholder.component.scss'],
})
export class ObjectTablePlaceholderComponent implements OnInit {
  times: number = 10;

  constructor() {}

  ngOnInit(): void {}
}
