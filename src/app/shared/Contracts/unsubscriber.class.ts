// import { Injectable, OnDestroy } from '@angular/core';
// import { Subscription } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class Unsubscriber implements OnDestroy {
//   private _subs: Subscription[] = [];

//   constructor() {}

//   add(...subscriptions: Subscription[]) {
//     this._subs = this._subs.concat(subscriptions);
//   }

//   set sink(sub: Subscription) {
//     this._subs.push(sub);
//   }

//   ngOnDestroy(): void {
//     this._subs.forEach((s) => s.unsubscribe());
//      this._subs.forEach(
//        (sub) => sub && typeof sub.unsubscribe === 'function' && sub.unsubscribe()
//      );
//      this._subs = [];
//   }
// }
