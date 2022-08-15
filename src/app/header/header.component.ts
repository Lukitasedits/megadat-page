import { HomeComponent } from './../home/home.component';
import { AnchorScrollService } from './../services/anchor-scroll.service';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, HostListener, Inject, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { timeout } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  @ViewChild("cover") header: ElementRef;
  @ViewChild("panelSistemas") panelSistemas: ElementRef;
  @ViewChild("sistemasItem") sistemasItem: ElementRef;
  @ViewChild("menu") menu: ElementRef;
  @ViewChild("lista") lista: ElementRef;
  @ViewChild("listaMenu") listaMenu: ElementRef;
  scrollYAntiguo:number = scrollY;
  menuAbierto: boolean = false;
  sistemaMenuDesplegado: boolean = false;
  home : HomeComponent;


  constructor(@Inject(DOCUMENT) private document: Document,
              private renderer: Renderer2,
              private anchorScrollService: AnchorScrollService,
              public router: Router) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.reSizeMethods();
  }

  @HostListener('window:scroll')
  scrollListener() {
    const verticalOffset = window.pageYOffset
          || document.documentElement.scrollTop
          || document.body.scrollTop || 0;
      if(verticalOffset > this.scrollYAntiguo){
        this.ocultarHeader();
        this.cerrarMenu(this.listaMenu.nativeElement);
      } else {
        this.mostrarHeader();
      }
      this.scrollYAntiguo = verticalOffset;
  }

  @HostListener('window:resize', ['$event'])
  reSizeMethods(){
    const menu = this.menu.nativeElement;
    const lista = this.lista.nativeElement;
    if(document.documentElement.clientWidth > 620){
      this.renderer.setStyle(menu, "display", "none");
      this.renderer.setStyle(lista, "display", 'flex');
      this.cerrarMenu(this.listaMenu.nativeElement);
    } else {
      this.renderer.setStyle(menu, "display", 'block');
      this.renderer.setStyle(lista, "display", "none");
    }
    this.acomodarPanelSistemas();

  }

  alterarMenu(){
    const listaMenu = this.listaMenu.nativeElement;
    if(this.menuAbierto){
      this.cerrarMenu(listaMenu);
    } else {
      this.abrirMenu(listaMenu);
    }
  }

  abrirMenu(listaMenu: any){
    if(document.getElementById('lista-menu')?.offsetTop == 0){
    this.renderer.setStyle(listaMenu, 'display', 'flex');
      setTimeout(()=>{
      this.renderer.setStyle(listaMenu, 'top', '70px');
      }, 10)
      this.menuAbierto = true;
    }
  }

  cerrarMenu(listaMenu: any){
    if(document.getElementById('lista-menu')?.offsetTop == 70){
      this.renderer.setStyle(listaMenu, 'top', '-200px');
      setTimeout(()=>{
        this.renderer.setStyle(listaMenu, 'display', 'none');
      }, 200)
      this.menuAbierto = false;
    }
  }


  acomodarPanelSistemas(){
    var sistemasOffset = document.getElementById('sistemas')?.offsetLeft;
    const panelSistemas = this.panelSistemas.nativeElement;
    this.renderer.setStyle(panelSistemas, 'left', sistemasOffset + 'px')
  }

  mostrarSistemas(){
    const panelSistemas = this.panelSistemas.nativeElement;
    this.renderer.setStyle(panelSistemas, "top", '70px');
  }

  ocultarSistemas(){
    const panelSistemas = this.panelSistemas.nativeElement;
    this.renderer.setStyle(panelSistemas, "top", '-210px');
  }

  ocultarHeader(){
    this.ocultarSistemas();
    this.cerrarMenu(this.listaMenu.nativeElement);
    //this.renderer.setStyle(this.header.nativeElement, "transform", "translateY(-70px)");
  }

  mostrarHeader(){
    this.renderer.setStyle(this.header.nativeElement, "transform", "translateY(0)");
  }

  scrollHome(){
    this.router.navigate(['inicio']);
    this.document.documentElement.scrollTop = 0;
    this.home.initAnchorScrolls();
  }

  scrollServicios(){
    this.router.navigate(['inicio']);
    this.anchorScrollService.getElementScroll(0).subscribe(e =>{
      e.scrollIntoView({behavior: 'smooth'});
    })
    this.ocultarHeader();
  }

  scrollEmpresas(){
    this.router.navigate(['inicio']);
    this.anchorScrollService.getElementScroll(1).subscribe(e=>{
      e.scrollIntoView({behavior: 'smooth'});
    })
    this.ocultarHeader();
  }

  scrollSistemas(){
    this.router.navigate(['inicio']);
    this.anchorScrollService.getElementScroll(2).subscribe(e =>{
      e.scrollIntoView({behavior: 'smooth'});
    })
    this.ocultarHeader();
  }

  scrollContacto(){
    this.router.navigate(['inicio']);
    this.anchorScrollService.getElementScroll(3).subscribe(e => {
      e.scrollIntoView({behavior: 'smooth'})
    });
    this.ocultarHeader();
  }

  goToSistemaDeGestion(){
    this.router.navigate(['sistema-de-gestion']);
    this.cerrarMenu(this.listaMenu.nativeElement);
    this.document.documentElement.scrollTop = 0;
  }

  goToSistemaVisualElectronica(){
    this.router.navigate(['sistema-visual-electronica']);
    this.cerrarMenu(this.listaMenu.nativeElement);
    this.document.documentElement.scrollTop = 0;
  }
}
