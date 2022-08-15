import { Component, ElementRef, OnInit, ViewChild, Renderer2, HostListener, HostBinding, ViewChildren, QueryList, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-sistema-de-gestion',
  templateUrl: './sistema-de-gestion.component.html',
  styleUrls: ['./sistema-de-gestion.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SistemaDeGestionComponent implements OnInit {
  @ViewChildren('imagen') imagen: QueryList<ElementRef>;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {

  }

  @HostListener('window:resize', ['$event'])
  resizeImages(){
    const imagenes = this.imagen.toArray();
    if(document.documentElement.clientWidth>1200){
      for(let i = 0; i < imagenes.length; i++){
        let img = imagenes[i].nativeElement;
        this.renderer.setStyle(img, 'height', document.documentElement.clientWidth*0.25 + 'px');
      }
    } else{
      for(let i = 0; i < imagenes.length; i++){
        let img = imagenes[i].nativeElement;
        this.renderer.setStyle(img, 'height', document.documentElement.clientWidth*0.49 + 'px');
      }
    }
  }

}
