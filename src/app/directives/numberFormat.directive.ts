import { Directive, ElementRef, HostListener, Input, Renderer2, ViewChild } from '@angular/core';

@Directive({
  selector: '[numberFormat]'
})
export class NumberFormatDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('input', ['$event'])
  toNumber(event: Event){
    const numbersOnly = /[^0-9]*/g;

    const initValue = this.el.nativeElement.value;
  this.el.nativeElement.value = initValue.replace(numbersOnly, '');

    if(initValue !== this.el.nativeElement.value){
      event.stopPropagation();
    }

  }
}
