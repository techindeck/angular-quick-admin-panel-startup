// import {
//   Component,
//   OnInit,
//   Input,
//   AfterViewInit,
//   Output,
//   EventEmitter,
// } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';
// import { BehaviorSubject } from 'rxjs';
// import {
//   eFilterOption,
//   IArtist,
//   IClassification,
//   ICulture,
//   IDate,
//   IDepartment,
//   IFilter,
//   IFilterData,
// } from '../../../helpers/interface';
// import { FilterService } from '../../../services/filter.service';

// @Component({
//   selector: 'app-filters',
//   templateUrl: './filters.component.html',
//   styleUrls: ['./filters.component.scss'],
// })
// export class FiltersComponent implements OnInit, AfterViewInit {
//   // initialize a private variable _data, it's a BehaviorSubject
//   private _data = new BehaviorSubject<any>({});

//   // change data to use getter and setter
//   @Input()
//   set data(value) {
//     // set the latest value for _data BehaviorSubject
//     this._data.next(value);
//   }

//   get data() {
//     // get the latest value from _data BehaviorSubject
//     return this._data.getValue();
//   }

//   @Output() filterChangeEvent: EventEmitter<any> = new EventEmitter<any>();

//   selectedFilter: IFilterData = {
//     department: [],
//     classification: [],
//     artist: [],
//     date: [],
//     culture: [],
//   };

//   filterData: IFilterData = {
//     department: [],
//     classification: [],
//     artist: [],
//     date: [],
//     culture: [],
//   };

//   filterForm: IFilter = {
//     department: null,
//     classification: null,
//     artist: null,
//     date: null,
//     culture: null,
//   };

//   loading: boolean = true;
//   searchResult: any[] | object[] = [];

//   constructor(
//     private readonly _activatedRoute: ActivatedRoute,
//     private readonly _filterService: FilterService
//   ) {
//     // this.getFilters();
//   }

//   ngOnInit(): void {
//     this._data.subscribe((x) => {
//       console.log(x);
//       this.filterData = this.data;
//       this._activatedRoute.queryParams.subscribe((params: any) => {
//         this.populateFilter(params);
//       });
//     });
//   }

//   ngAfterViewInit(): void {}

//   handleFilterChange(
//     typ: string,
//     changeModel: string,
//     changes: string | number | null
//   ): void {
//     switch (changeModel) {
//       case 'department':
//         this.filterData.department.map((dep: IDepartment) => {
//           if (changes === dep.id) {
//             this.selectedFilter.department.push(dep);
//           }
//         });
//         this.filterChangeEvent.emit(this.selectedFilter);
//         break;
//       case 'classification':
//         this.filterData.classification.map((cls: IClassification) => {
//           if (changes === cls.id) {
//             this.selectedFilter.classification.push(cls);
//           }
//         });
//         this.filterChangeEvent.emit(this.selectedFilter);
//         break;
//       case 'artist':
//         this.filterData.artist.map((artist: IArtist) => {
//           if (changes === artist.id) {
//             this.selectedFilter.artist.push(artist);
//           }
//         });
//         this.filterChangeEvent.emit(this.selectedFilter);
//         break;
//       case 'date':
//         this.filterData.date.map((date: IDate) => {
//           if (changes === date.date) {
//             this.selectedFilter.date.push(date);
//           }
//         });
//         this.filterChangeEvent.emit(this.selectedFilter);
//         break;
//       case 'culture':
//         this.filterData.culture.map((culture: ICulture) => {
//           if (changes === culture.culture) {
//             this.selectedFilter.culture.push(culture);
//           }
//         });
//         this.filterChangeEvent.emit(this.selectedFilter);
//         break;
//     }
//     setTimeout(() => (this.filterForm.department = null));
//     setTimeout(() => (this.filterForm.classification = null));
//     setTimeout(() => (this.filterForm.artist = null));
//     setTimeout(() => (this.filterForm.date = null));
//     setTimeout(() => (this.filterForm.culture = null));
//   }

//   // Clear All filters
//   clearFilters(): void {
//     this.selectedFilter.department = [];
//     this.selectedFilter.artist = [];
//     this.selectedFilter.classification = [];
//     this.selectedFilter.date = [];
//     this.selectedFilter.culture = [];

//     this.filterForm.department = null;
//     this.filterForm.artist = null;
//     this.filterForm.classification = null;
//     this.filterForm.date = null;
//     this.filterForm.culture = null;

//     // this.selectedFilter._qtp = '_def';
//     // this.selectedFilter.view = 'grid';
//     // this.selectedFilter.searchField = 'all';
//     this.filterChangeEvent.emit(this.selectedFilter);
//   }

//   handleRemoveElement(key: number, changeModel: string) {
//     switch (changeModel) {
//       case 'department':
//         this.selectedFilter.department.forEach((value, index) => {
//           if (value.id == key) this.selectedFilter.department.splice(index, 1);
//         });
//         break;
//       case 'classification':
//         this.selectedFilter.classification.forEach((value, index) => {
//           if (value.id == key)
//             this.selectedFilter.classification.splice(index, 1);
//         });
//         break;
//       case 'artist':
//         this.selectedFilter.artist.forEach((value, index) => {
//           if (value.id == key) this.selectedFilter.artist.splice(index, 1);
//         });
//         break;
//       case 'date':
//         this.selectedFilter.date.forEach((value, index) => {
//           if (value.id == key) this.selectedFilter.date.splice(index, 1);
//         });
//         break;
//       case 'culture':
//         this.selectedFilter.culture.forEach((value, index) => {
//           if (value.id == key) this.selectedFilter.culture.splice(index, 1);
//         });
//         break;
//     }
//     setTimeout(() => this.filterChangeEvent.emit(this.selectedFilter));
//   }

//   private populateFilter(params: any): void {
//     this.selectedFilter[eFilterOption.DEPARTMENT] = this.filterData[
//       eFilterOption.DEPARTMENT
//     ].filter((item: IDepartment) => {
//       return item.id == params[eFilterOption.DEPARTMENT];
//     });
//     this.selectedFilter[eFilterOption.CLASSIFICATION] = this.filterData[
//       eFilterOption.CLASSIFICATION
//     ].filter((item: IClassification) => {
//       return item.id == params[eFilterOption.CLASSIFICATION];
//     });
//     this.selectedFilter[eFilterOption.ARTIST] = this.filterData[
//       eFilterOption.ARTIST
//     ].filter((item: IArtist) => {
//       return item.id == params[eFilterOption.ARTIST];
//     });

//     this.selectedFilter[eFilterOption.DATE] = this.filterData[
//       eFilterOption.DATE
//     ].filter((item: IDate) => {
//       return item.date == params[eFilterOption.DATE];
//     });
//     this.selectedFilter[eFilterOption.CULTURE] = this.filterData[
//       eFilterOption.CULTURE
//     ].filter((item: ICulture) => {
//       return item.culture == params[eFilterOption.CULTURE];
//     });
//   }

//   private getFilters() {
//     this._filterService.read({ instanceId: 1 }).subscribe({
//       next: (res: any) => {
//         this.filterData = res.data;
//         this._activatedRoute.queryParams.subscribe((params: any) => {
//           this.selectedFilter.department = this.filterData.department.filter(
//             (item) => {
//               // console.log(item.id == params['department']);
//               return item.id == params['department'];
//             }
//           );
//         });
//         // console.log(this.selectedFilter);
//       },
//       error: (err: any) => console.log(err),
//       complete: () => console.log('complete'),
//     });
//   }
// }
