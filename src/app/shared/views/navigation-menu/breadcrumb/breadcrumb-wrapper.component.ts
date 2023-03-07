import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { Breadcrumb } from '../../../models/breadcrumb.model';
import { BreadcrumbService } from '../../../services/breadcrumb.service';

@Component({
  selector: 'nav-breadcrumb',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="breadcrumb-header" aria-label="breadcrumb">
      <ng-container
        *ngIf="
          currentBreadcrumb?.url === '/home';
          then dashboard;
          else breadcrumb
        "
      >
      </ng-container>
    </nav>

    <!-- For dashboard Only -->
    <ng-template #dashboard>
      <span>Welcome back Amit </span>
      <h4 class="text-medium">Dashboard</h4>
    </ng-template>

    <!-- For every Page Breadcrumb links -->
    <ng-template #breadcrumb>
      <ol class="breadcrumb">
        <li class="breadcrumb-item text-aamras cursor-pointer" routerLink="">
          Home
        </li>
        <ng-container *ngFor="let breadcrumb of breadcrumbs$ | async">
          <li
            class="breadcrumb-item text-aamras text-aamras cursor-pointer"
            routerLinkActive="active"
            [routerLink]="[breadcrumb.url, breadcrumb.params]"
          >
            {{ breadcrumb.label }}
          </li>
        </ng-container>
      </ol>
      <h4 class="text-medium">{{ currentBreadcrumb?.label }}</h4>
    </ng-template>
  `,
  styles: [
    `
      .breadcrumb {
        display: flex;
        flex-wrap: wrap;
        padding: 0.75rem 1rem;
        margin-bottom: 1rem;
        list-style: none;
        background-color: transparent;
        line-height: 1.8rem;
        margin: 0;
        padding: 0;
        border-radius: 0.25rem;
        .breadcrumb-item.active {
          color: #6c757d;
        }
        .breadcrumb-item + .breadcrumb-item {
          padding-left: 0.5rem;
        }
        .breadcrumb-item + .breadcrumb-item::before {
          float: left;
          padding-right: 0.5rem;
          color: #6c757d;
          content: '/';
        }
        .breadcrumb-header h1 {
          margin: 0;
          font-family: SFUIText-Medium, geometria-Medium, Arial, Helvetica,
            sans-serif;
          font-size: calc(0.7rem + 1vw);
        }
      }
    `,
  ],
})
export class NavBreadcrumbComponent implements OnInit {
  currentBreadcrumb?: Breadcrumb;
  breadcrumbs$: Observable<Breadcrumb[]>;

  constructor(private readonly breadcrumbService: BreadcrumbService) {
    this.breadcrumbs$ = this.breadcrumbService.breadcrumbs$;
  }
  ngOnInit(): void {
    this.breadcrumbs$.subscribe(
      (bread) => (this.currentBreadcrumb = bread[bread.length - 1])
    );
    console.log(this.currentBreadcrumb);
  }
}
