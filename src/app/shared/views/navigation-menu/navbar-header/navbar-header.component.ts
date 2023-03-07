import { Component } from '@angular/core';

import { MenuItemComponent } from '../menu/menu-item.component';
import { MenuTitleComponent } from '../menu/menu-title.component';
import { CardComponent } from '../../utility/card/card.component';
import { NotificationComponent } from '../../utility/notification/notification.component';
import { NavUserProfileComponent } from '../../utility/nav-user-profile/nav-user-profile.component';


@Component({
  selector: 'navbar-header',
  standalone: true,
  imports: [
    CardComponent,
    MenuItemComponent,
    MenuTitleComponent,
    NotificationComponent,
    NavUserProfileComponent
  ],
  templateUrl: './navbar-header.component.html',
  styleUrls: ['./navbar-header.component.scss'],
})
export class NavbarHeaderComponent {}
