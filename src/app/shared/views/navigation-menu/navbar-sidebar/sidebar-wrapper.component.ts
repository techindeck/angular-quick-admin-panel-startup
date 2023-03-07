import { Component } from '@angular/core';

@Component({
  selector: 'sidebar-wrapper',
  standalone: true,
  template: `
    <aside class="sidebar-wrapper main-sidebar">
      <nav class="sidebar">
        <ng-content></ng-content>
      </nav>
    </aside>
  `,
  styleUrls: ['./navbar-sidebar.component.scss']
})
export class SidebarWrapperComponent {

}
