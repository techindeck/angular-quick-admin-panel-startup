import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ISort } from 'src/app/shared/helpers/interface';


@Component({
  selector: 'page-sort',
  templateUrl: './page-sort.component.html',
  styleUrls: ['./page-sort.component.scss'],
})
export class PageSortComponent implements OnInit {
  sortOption: ISort = {
    sortBy: 'UserNumber3',
    sortOrder: 'ASC',
  };

  // initialize a private variable _data, it's a BehaviorSubject
  private _data = new BehaviorSubject<ISort>({
    sortBy: '',
    sortOrder: '',
  });

  // change data to use getter and setter
  @Input()
  set data(value) {
    // set the latest value for _data BehaviorSubject
    this._data.next(value);
  }

  get data() {
    // get the latest value from _data BehaviorSubject
    return this._data.getValue();
  }

  @Output() pageSortChange: EventEmitter<ISort> = new EventEmitter<ISort>();

  sortType: string = 'Artist-ASC';

  constructor() { }

  ngOnInit(): void {
    this._data.subscribe((x) => {
      console.log('sortPage');
      this.sortOption = x;
    });
  }
  // Sort Method
  handleSortBy(): void {
    switch (this.sortType) {
      case 'Artist-ASC':
        this.sortOption.sortBy = 'UserNumber3';
        this.sortOption.sortOrder = 'ASC';
        this.pageSortChange.emit(this.sortOption);
        break;
      case 'Artist-DESC':
        this.sortOption.sortBy = 'UserNumber3';
        this.sortOption.sortOrder = 'DESC';
        this.pageSortChange.emit(this.sortOption);
        break;
      case 'Date-ASC':
        this.sortOption.sortBy = 'Dated';
        this.sortOption.sortOrder = 'ASC';
        this.pageSortChange.emit(this.sortOption);
        break;
      case 'Date-DESC':
        this.sortOption.sortBy = 'Dated';
        this.sortOption.sortOrder = 'DESC';
        this.pageSortChange.emit(this.sortOption);
        break;
    }
  }
}
