import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'megadat-app';
  porcentajeScroll:number = 0;
  alturaActualScroll:number = 0;

  @HostListener('window:scroll')
  onWindowScroll():void{
    const yOffSet= window.scrollY;
    const altoTotal = document.documentElement.scrollHeight-document.documentElement.clientHeight;
    this.alturaActualScroll = yOffSet*100/altoTotal;
    this.porcentajeScroll = Math.round(this.alturaActualScroll);
  }
}
