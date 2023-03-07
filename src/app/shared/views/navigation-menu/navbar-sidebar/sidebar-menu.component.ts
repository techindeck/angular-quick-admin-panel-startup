import { Component } from '@angular/core';

@Component({
  selector: 'sidebar-menu',
  standalone: true,
  template: `
    <div
      class="nav text-sm"
      data-widget="treeview"
      role="menu"
      data-accordion="false"
    >
      <ng-content></ng-content>
    </div>
  `,
  styles: [``]
})
export class SidebarMenuComponent {

}
