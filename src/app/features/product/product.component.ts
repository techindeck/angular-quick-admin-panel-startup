import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  pageTitle: string = 'Create Product';

  columns = [
    { key: 'id', name: 'ID', option: [] },
    { key: 'title', name: 'Title', option: [] },
    { key: 'userId', name: 'User ID', option: [] },
  ];

  printConsole(): void{
    console.log(this.pageTitle);

  }

}
