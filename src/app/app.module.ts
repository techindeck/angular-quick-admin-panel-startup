import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RootComponent } from './root/root.component';
import { ProductComponent } from './features/product/product.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './shared/providers/interceptors/http-error.interceptor';
import { NgSelectModule } from '@ng-select/ng-select';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { NavBreadcrumbComponent } from './shared/views/navigation-menu/breadcrumb/breadcrumb-wrapper.component';
import { CardComponent } from './shared/views/utility/card/card.component';
import { MenuItemComponent } from './shared/views/navigation-menu/menu/menu-item.component';
import { TableSearchComponent } from './shared/views/utility/table-search/table-search.component';

;
@NgModule({
  declarations: [RootComponent, ProductComponent, DashboardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavBreadcrumbComponent,
    CardComponent,
    MenuItemComponent,
    TableSearchComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [RootComponent],
})
export class AppModule {}
