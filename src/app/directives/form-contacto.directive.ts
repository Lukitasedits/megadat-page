import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFormContacto]'
})
export class FormContactoDirective {

  constructor(private el:ElementRef) { }

  @HostListener('submit', ['$event'])
  async handleSubmit(event: Event){
    const thisForm = this.el.nativeElement;
    event.preventDefault();
    const fomr = new FormData(thisForm);
    const response = await fetch(thisForm.action, {
      method: thisForm.method,
      body: thisForm,
      headers: {
        'Accept': 'application/json'
      }
    })
    if(response.ok){
      thisForm.reset()
      alert('Gracias por contactarme, te escribiremos pronto')
    }
  }

}
