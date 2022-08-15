import { ElementRef, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnchorScrollService {
  elementsScroll: HTMLElement[] = [];
  constructor() { }

  setElementScroll(elements: HTMLElement[]){
    this.elementsScroll = elements;
  }

  getElementsScroll(): Observable<HTMLElement[]>{
    return of(this.elementsScroll);
  }

  addElementScroll(elementScroll: HTMLElement){
    this.elementsScroll.push(elementScroll);
  }

  getElementScroll(index : number): Observable<HTMLElement>{
    return of(this.elementsScroll[index]);
  }

  resetElementScrolls(){
    this.elementsScroll.length = 0;
  }

}
