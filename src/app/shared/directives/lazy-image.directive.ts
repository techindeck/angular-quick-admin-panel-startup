import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'img',
})
export class LazyImageDirective {
  constructor({ nativeElement }: ElementRef<HTMLImageElement>) {
    const supports = 'loading' in HTMLImageElement.prototype;

    if (supports) {
      nativeElement.setAttribute('loading', 'lazy');
      // console.log('lazy loading');
    } else {
      console.error('lazy loading not supported');
    }
  }
}
