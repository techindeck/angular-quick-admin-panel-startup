import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss'],
})
export class SortComponent implements OnInit {
  queryFilter: object | any = {};
  searchStatistic = {
    currentPage: 1,
    lastPage: 0,
    numPerPage: this.queryFilter.perPage,
    total: 0,
    from: 0,
    to: 0,
  };
  loading: boolean = true;
  selectedFilter: any = {};
  sortTypeSelectOption: string = '';
  searchResult: any[] | object[] = [];
  fltData: any[] | object[] = [];

  constructor(private _router: Router) {}
  updateFilters(typ: string, changes: any): void {
    if (typ === 'query') {
      if (changes != '' && changes != null && changes != undefined) {
        this.queryFilter.q = changes;
        this.queryFilter.oq = changes;
      } else {
        this.queryFilter.q = null;
        this.queryFilter.oq = null;
      }

      this.selectedFilter.department = null;
      this.selectedFilter.artist = null;
      this.selectedFilter.classification = null;
      this.selectedFilter.date = null;
      this.selectedFilter.culture = null;
      this.selectedFilter._qtp = '_def';
      this.selectedFilter.view = 'grid';
      this.selectedFilter.searchField = 'all';
    }
    this.queryFilter._qtp = '_flt';
    this.selectedFilter._qtp = '_flt';
    this.queryFilter.department = this.selectedFilter.department;
    this.queryFilter.artist =
      this.selectedFilter.artist == null || this.selectedFilter.artist == ''
        ? null
        : this.selectedFilter.artist;
    this.queryFilter.classification =
      this.selectedFilter.classification == null ||
      this.selectedFilter.classification == ''
        ? null
        : this.selectedFilter.classification;
    this.queryFilter.date =
      this.selectedFilter.date == null || this.selectedFilter.date == ''
        ? null
        : this.selectedFilter.date;
    this.queryFilter.culture =
      this.selectedFilter.culture == null || this.selectedFilter.culture == ''
        ? null
        : this.selectedFilter.culture;
    this.queryFilter.perPage =
      this.selectedFilter.perPage == null || this.selectedFilter.perPage == ''
        ? 40
        : this.selectedFilter.perPage;

    this.getObjects();
  }
  // Get all artefact data
  getObjects(): void {
    this.queryFilter._aud = '_obj';
    this._router.navigate(['cvs/object'], {
      queryParams: this.queryFilter,
      queryParamsHandling: 'merge',
    });
    this.searchStatistic = {
      currentPage: 1,
      lastPage: 0,
      numPerPage: this.queryFilter.perPage,
      total: 0,
      from: 0,
      to: 0,
    };
    this.loading = true;
    this.searchResult = [];
    window.scrollTo(0, 0);
    // this._objectService.read(this.queryFilter).subscribe(
    //   (res) => {
    //     this.loading = false;
    //     if (res.data != null || res.data != undefined) {
    //       this.searchStatistic.currentPage = res.data.collection.current_page;
    //       this.searchStatistic.lastPage = res.data.collection.last_page;
    //       this.searchStatistic.numPerPage = res.data.collection.per_page;
    //       this.searchStatistic.total = res.data.collection.total;
    //       this.searchStatistic.from =
    //         res.data.collection.from == null ? 0 : res.data.collection.from;
    //       this.searchStatistic.to =
    //         res.data.collection.to == null ? 0 : res.data.collection.to;

    //       if (res.data.collection.data.length > 0) {
    //         this.fltData = [...res.data.fltData];
    //         this.searchResult = res.data.collection.data;
    //       }
    //     }
    //   },
    //   (err) => {
    //     this.loading = false;
    //     console.error(err);
    //   }
    // );
  }

  // Sort Method
  handleSortBy(sortFor: string): void {
    switch (sortFor) {
      case 'Artist-ASC':
        this.queryFilter.sortBy = 'UserNumber3';
        this.queryFilter.sortOrder = 'ASC';
        this.selectedFilter.sortBy = 'UserNumber3';
        this.selectedFilter.sortOrder = 'ASC';
        this.getObjects();
        break;
      case 'Artist-DESC':
        this.queryFilter.sortBy = 'UserNumber3';
        this.queryFilter.sortOrder = 'DESC';
        this.selectedFilter.sortBy = 'UserNumber3';
        this.selectedFilter.sortOrder = 'DESC';
        this.getObjects();
        break;
      case 'Date-ASC':
        this.queryFilter.sortBy = 'Dated';
        this.queryFilter.sortOrder = 'ASC';
        this.selectedFilter.sortBy = 'UserNumber3';
        this.selectedFilter.sortOrder = 'DESC';
        this.getObjects();
        break;
      case 'Date-DESC':
        this.queryFilter.sortBy = 'Dated';
        this.queryFilter.sortOrder = 'DESC';
        this.selectedFilter.sortBy = 'UserNumber3';
        this.selectedFilter.sortOrder = 'DESC';
        this.getObjects();
        break;

      default:
        break;
    }
  }
  changeLayout(layoutType: string): void {
    this.queryFilter.view = layoutType;
  }

  ngOnInit(): void {}
}
