import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appWindow]'
})
export class WindowDirective {

  constructor(private element: ElementRef,private renderer: Renderer2) {

  }

}
