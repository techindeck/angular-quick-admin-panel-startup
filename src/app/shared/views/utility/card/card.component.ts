import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone:true,
  template:`
    <div class="card border-0">
      <ng-content></ng-content>
    </div>
  `,
  styles: []
})
export class CardComponent {

}
