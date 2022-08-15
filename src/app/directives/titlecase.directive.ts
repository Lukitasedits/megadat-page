import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTitlecase]'
})
export class TitlecaseDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input')
  titleCaseFunction(){
    let string = this.el.nativeElement.value;
    if(string.length == 1 || string[string.length-2] == ' '){
      let letraCapital = string[string.length-1].toUpperCase();
      string =  string.slice(0, -1);
      string+= letraCapital;
      this.el.nativeElement.value = string;
    }
    console.log(string)
  }
}
