import { ChangeDetectionStrategy, Component, Inject, Injectable, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-circuito-scroll',
  templateUrl: './circuito-scroll.component.html',
  styleUrls: ['./circuito-scroll.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CircuitoScrollComponent implements OnInit{

  constructor() { }

  @Input() color:string;
  @Input() scrollY:number = 0;
  @Input() alturaExacta: number = 0;

  ngOnInit(): void {
  }


}
