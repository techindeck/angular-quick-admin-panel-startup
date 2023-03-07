import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MenuService {

  private menus = [
    {
      name: 'dashboard',
      path: '/home',
      hasOptions: false,
    },
    {
      name: 'product',
      path: '/products',
      hasOptions: false,
    },
    {
      name: 'inventory',
      path: '/inventory',
      hasOptions: false
    },
    {
      title: 'master',
      hasOptions: true,
      isCollapsed: false,
      options: [
        {
          name: 'master 1',
          path: '/master',
          hasOptions: false,
        },
        {
          name: 'master 2',
          path: '/master',
          hasOptions: false
        },
        {
          name: 'master 3',
          path: '/master',
          hasOptions: false
        },
        {
          name: 'master 4',
          path: '/master',
          hasOptions: false
        },
        {
          name: 'master 5',
          path: '/master',
          hasOptions: false
        }
      ]
    },

    {
      title: 'setting',
      hasOptions: true,
      isCollapsed: false,
      options: [
        {
          name: 'setting 1',
          path: '/setting',
          hasOptions: false
        },
        {
          name: 'setting 2',
          path: '/setting',
          hasOptions: false
        },
        {
          name: 'setting 3',
          path: '/setting',
          hasOptions: false
        }
      ]
    },
    // {
    //   name: 'logout',
    //   path: '',
    //   hasOptions: false,
    // }
  ]

  constructor() {

  }


  public getMenus() : Array<any> {
    return this.menus;
  }


}
