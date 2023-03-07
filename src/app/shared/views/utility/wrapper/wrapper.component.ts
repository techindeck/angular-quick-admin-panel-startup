import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarHeaderComponent } from '../../navigation-menu/navbar-header/navbar-header.component';
import { NavbarSidebarComponent } from '../../navigation-menu/navbar-sidebar/navbar-sidebar.component';
import { NavBreadcrumbComponent } from '../../navigation-menu/breadcrumb/breadcrumb-wrapper.component';


@Component({
  selector: 'app-wrapper',
  standalone: true,
  imports: [
    RouterModule,
    NavbarHeaderComponent,
    NavbarSidebarComponent,
    NavBreadcrumbComponent,
  ],
  template: `
    <div class="wrapper">
      <div class="header-wrapper">
        <navbar-header></navbar-header>
      </div>
      <div class="split-container">
        <div class="ui-split">
          <navbar-sidebar></navbar-sidebar>
        </div>
        <div class="split-divider"></div>
        <div class="ui-split">
          <div class="container-fluid">
            <div class="content-header">
              <nav-breadcrumb></nav-breadcrumb>
            </div>
          </div>
          <div class="content">
            <div class="container-fluid">
              <router-outlet></router-outlet>
            </div>
          </div>

          <!-- <div class="footer-wrapper"></div> -->
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .wrapper {
        flex: none;
        position: relative;
        block-size: calc(100% - 45px);
        border-block-start-color: #d8d8da;
        height: calc(100vh - 2rem);
      }
      .wrapper .header-wrapper {
        height: auto;
        min-height: 44px;
        top: 0;
        left: 0;
        inset-block-start: 0;
        inset-inline-start: 0;
        font-family: SFUIText, Helvetica Neue, sans-serif;
        font-size: 18px;
        font-weight: 300;
        user-select: none;
        block-size: auto;
        min-block-size: 44px;
        letter-spacing: 0;
        box-sizing: content-box;
        align-items: center;
        background-color: #e4e4e6;

        /* background-color: rgba(37,38,40,.21);
      background-image: radial-gradient(circle at 25%,hsla(0,0%,100%,.2),rgba(50,50,50,.2) 80%);
      -webkit-backdrop-filter: blur(14px);
      backdrop-filter: blur(14px); */
      }
      .wrapper .split-container {
        display: flex;
        height: 100%;
      }
      .wrapper .split-container .ui-split {
        width: 230px;
        position: relative;
        left: 0;
        overflow-x: hidden;
        top: 0;
        text-overflow: ellipsis;
      }
      .ui-split:last-child {
        flex: 1 1 0;
      }
      .wrapper .split-container .split-divider {
        position: absolute;
        left: 230px;
        height: 100%;
        width: 0;
        z-index: 1;
      }

      .footer {
        display: block;
      }
    `,
  ],
})
export class WrapperComponent {}
