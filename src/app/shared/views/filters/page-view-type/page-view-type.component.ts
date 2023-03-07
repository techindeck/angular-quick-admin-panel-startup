import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'page-view-type',
  templateUrl: './page-view-type.component.html',
  styleUrls: ['./page-view-type.component.scss'],
})
export class PageViewTypeComponent implements OnInit {
  // initialize a private variable _data, it's a BehaviorSubject
  private _data = new BehaviorSubject<string>('');

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
  @Output() viewChangeEvent = new EventEmitter<string>();

  viewLayoutType: string = '';
  constructor() {}

  ngOnInit(): void {
    this._data.subscribe((x) => {
      // console.log(x);
      this.viewLayoutType = this.data;
    });
  }

  changeLayout(layoutType: string): void {
    this.viewLayoutType = layoutType;
    this.viewChangeEvent.emit(layoutType);
  }
}
