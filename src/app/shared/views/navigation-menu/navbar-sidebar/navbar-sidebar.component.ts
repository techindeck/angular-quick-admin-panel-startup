import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SidebarMenuComponent } from './sidebar-menu.component';
import { SidebarWrapperComponent } from './sidebar-wrapper.component';
import { MenuTitleComponent } from '../menu/menu-title.component';
import { MenuItemComponent } from '../menu/menu-item.component';
import { RouterModule } from '@angular/router';
import { MenuService } from 'src/app/shared/services/menu.service';


interface IMenu {
  title: string;
  hasOption: boolean;
  isCollapsed: boolean;
  options: string[]
}

@Component({
  selector: 'navbar-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, SidebarWrapperComponent, SidebarMenuComponent, MenuTitleComponent, MenuItemComponent],
  templateUrl: './navbar-sidebar.component.html',
  styleUrls: ['./navbar-sidebar.component.scss'],
})
export class NavbarSidebarComponent {
  menus;

  constructor(private menuService: MenuService) {
    this.menus = this.menuService.getMenus();
  }

  toggleMenuOption(menu: IMenu) {
    menu.isCollapsed = !menu.isCollapsed;
  }
}
