import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
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

  @Output() queryChangeEvent = new EventEmitter<string>();

  query: string = '';

  filters: any = {
    src: 'hm',
    _qtp: '_def',
    q: null,
    oq: null,
    searchField: 'all',
    page: 1,
    perPage: 40,
    offset: 0,
    sortBy: 'UserNumber3',
    sortOrder: 'ASC',
    view: 'grid',
    instanceId: 1,
  };

  constructor() {}

  ngOnInit(): void {
    this._data.subscribe((x) => {
      // console.log(x);
      this.query = x;
    });
  }

  onSubmit(f: any): void {
    if (this.query != '' && this.query != null) {
      this.filters.q = this.query;
      this.filters.oq = this.query;
    } else {
      this.filters.q = null;
      this.filters.oq = null;
    }

    this.queryChangeEvent.emit(this.query);
  }
  resetForm(f: any): void {
    this.query = '';
    f.reset();
    this.onSubmit(f);
  }
}
