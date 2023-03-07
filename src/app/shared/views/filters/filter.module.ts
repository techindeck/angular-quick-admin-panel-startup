import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { PageLimitComponent } from './page-limit/page-limit.component';
import { PageResultCountComponent } from './page-result-count/page-result-count.component';
import { PageSortComponent } from './page-sort/page-sort.component';
import { PageViewTypeComponent } from './page-view-type/page-view-type.component';
import { PaginationComponent } from './pagination/pagination.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SortComponent } from './sort/sort.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PageLimitComponent,
    PageResultCountComponent,
    PageSortComponent,
    PageViewTypeComponent,
    PaginationComponent,
    SearchBarComponent,
    SortComponent

  ],
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule
  ],
  exports: [
    PageLimitComponent,
    PageResultCountComponent,
    PageSortComponent,
    PageViewTypeComponent,
    PaginationComponent,
    SearchBarComponent,
    SortComponent
  ],
})
export class FiltersModule { }
