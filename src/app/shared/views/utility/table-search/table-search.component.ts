import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'table-search',
  standalone: true,
  templateUrl: './table-search.component.html',
  styleUrls: ['./table-search.component.scss'],
})
export class TableSearchComponent implements OnInit {
  tableSearchControl = new FormControl('', [Validators.required]);

  constructor() {}

  ngOnInit(): void {}
}
