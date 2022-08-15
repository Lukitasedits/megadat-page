import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton-pro',
  templateUrl: './boton-pro.component.html',
  styleUrls: ['./boton-pro.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BotonProComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


}
