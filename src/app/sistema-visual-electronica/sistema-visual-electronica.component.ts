import { ChangeDetectionStrategy, Component, ElementRef, HostListener, OnInit, QueryList, Renderer2, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-sistema-visual-electronica',
  templateUrl: './sistema-visual-electronica.component.html',
  styleUrls: ['./sistema-visual-electronica.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SistemaVisualElectronicaComponent implements OnInit {

  @ViewChildren('imagen') imagen: QueryList<ElementRef>;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {

  }

  ngAfterView(){
    setTimeout(()=>{
      this.resizeImages();
    });
  }

  @HostListener('window:resize', ['$event'])
  resizeImages(){
    const imagenes = this.imagen.toArray();
    for(let i = 0; i < imagenes.length; i++){
      let img = imagenes[i].nativeElement;
      this.renderer.setStyle(img, 'height', document.documentElement.clientWidth*0.33 + 'px');
    }
  }
}
