import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { ProductComponent } from './features/product/product.component';
import { ErrorNotFoundComponent } from './shared/views/alerts/error-not-found/error-not-found.component';
import { WrapperComponent } from './shared/views/utility/wrapper/wrapper.component';

const routes: Routes = [
  {
    path: '',
    component: WrapperComponent,

    children: [
      {
        path: 'home',
        component: DashboardComponent,
        data: { breadcrumb: 'Home' },
      },
      {
        path: 'products',
        component: ProductComponent,
        data: { breadcrumb: 'Product' },
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '**',
    pathMatch: 'full',
    component: ErrorNotFoundComponent,
    data: { breadcrumb: '404 Not Found' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
