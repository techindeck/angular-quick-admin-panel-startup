import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'page-limit',
  templateUrl: './page-limit.component.html',
  styleUrls: ['./page-limit.component.scss'],
})
export class PageLimitComponent implements OnInit {
  @Input() perPage: number = 20;

  @Output() perPageChange: EventEmitter<number> = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}

  public onPageLimitChange(_numOfRecord: number): void {
    this.perPageChange.emit(_numOfRecord);
  }
}
