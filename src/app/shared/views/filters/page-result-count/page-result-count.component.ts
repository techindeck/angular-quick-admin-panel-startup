import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IQueryStatistics } from 'src/app/shared/helpers/interface';


@Component({
  selector: 'page-result-count',
  templateUrl: './page-result-count.component.html',
  styleUrls: ['./page-result-count.component.scss'],
})
export class PageResultCountComponent implements OnInit {
  // initialize a private variable _data, it's a BehaviorSubject
  private _data = new BehaviorSubject<any>({});

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

  searchStatistic: IQueryStatistics = {
    current_page: 0,
    from: 0,
    last_page: 0,
    per_page: 0,
    to: 0,
    total: 0,
  };
  loading: boolean = true;
  constructor() {}

  ngOnInit(): void {
    this._data.subscribe((x) => {
      this.searchStatistic = this.data;
    });
  }
}
