import { AnchorScrollService } from '../services/anchor-scroll.service';
import { Imagen } from '../models/imagen';
import { MenuService } from '../services/menu.service';
import { EmpresasService } from '../services/empresas-service';
import { Component, OnInit, HostListener, ViewChild, ElementRef, ViewChildren, QueryList, AfterViewInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import { Empresa } from '../models/empresa';
import { Renderer2 } from '@angular/core';
import { ConstantPool } from '@angular/compiler';
import { Menu } from '../models/menu';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChildren('logo') logos: QueryList<ElementRef>;
  @ViewChild('galeria') galeria: ElementRef;
  @ViewChild('galeriaFrontal') galeriaFrontal: ElementRef;
  @ViewChild('galeriaIzquierda') galeriaIzquierda: ElementRef;
  @ViewChild('galeriaDerecha') galeriaDerecha: ElementRef;
  @ViewChild('formContacto') formContacto: ElementRef;
  menus: Menu[];
  empresas: Empresa[] = [];
  tamPantalla:Number = document.documentElement.clientWidth;
  ePFila: number = 0;
  resto: number = 0;
  imagenesGaleria: Imagen[] = [];
  tituloTrabajo: string;
  descripcionTrabajo: string;
  trabajoActual: number = 0;
  numberPhone: string = '777';

  constructor(
    private empresasService : EmpresasService, private anchorScrollService: AnchorScrollService , private menusService: MenuService, private renderer: Renderer2, public router: Router) {
   }
  ngAfterViewInit(): void {
    this.inicialGaleria();
    this.reSizeWindow();
    this.initAnchorScrolls();
    setTimeout(() => {
    });
  }

  ngOnInit(): void {
    this.empresas = this.empresasService.getEmpresas();
    this.menus = this.menusService.getMenus();
    this.ajustarEmpresas();
  }

  @HostListener('window:resize', ['$event'])
  reSizeWindow(){
    this.ajustarEmpresas();
    const galeriaGeneral = this.galeria.nativeElement;
    let altoGaleria = this.tamPantalla.valueOf()*0.428;
    this.renderer.setStyle(galeriaGeneral, 'height', `${altoGaleria}px`);
  }

  ajustarEmpresas(){
    this.tamPantalla = document.documentElement.clientWidth;
    this.ePFila= Number.parseInt(((this.tamPantalla.valueOf()-300)/300).toPrecision(1));
    this.resto = this.empresas.length%this.ePFila;
  }


  initAnchorScrolls(){
    this.anchorScrollService.resetElementScrolls();

    let serviciosElement = document.getElementById('servicios');
    if(serviciosElement){
      this.anchorScrollService.addElementScroll(serviciosElement);
    }

    let empresasElement = document.getElementById('empresas');
    if(empresasElement){
      this.anchorScrollService.addElementScroll(empresasElement);
    }

    let sistemasElement = document.getElementById('sist');
    if(sistemasElement){
      this.anchorScrollService.addElementScroll(sistemasElement);
    }

    let contactoElement = document.getElementById('contacto');
    if(contactoElement){
      this.anchorScrollService.addElementScroll(contactoElement);
    }
  }

  inicialGaleria(){
    for(let j = 0; j < this.menus[0].imagenes.length; j++){
      this.imagenesGaleria.push(this.menus[0].imagenes[j]);
    }
    this.distribuirGaleria();
  }

  girarDerecha(){
    let aux = this.imagenesGaleria[0];

    for(let i = 0; i< this.imagenesGaleria.length-1; i++){
      this.imagenesGaleria[i] = this.imagenesGaleria[i+1];
    }
    this.imagenesGaleria[this.imagenesGaleria.length-1] = aux;
    this.distribuirGaleria();
  }

  girarIzquierda(){
    let aux = this.imagenesGaleria[this.imagenesGaleria.length-1];

    for(let i = this.imagenesGaleria.length-1; i> 0; i--){
      this.imagenesGaleria[i] = this.imagenesGaleria[i-1];
    }
    this.imagenesGaleria[0] = aux;
    this.distribuirGaleria();
  }

  distribuirGaleria(){
    const frontal = this.galeriaFrontal.nativeElement;
    const izquierda = this.galeriaIzquierda.nativeElement;
    const derecha = this.galeriaDerecha.nativeElement;
    this.establecerDescripcion();

    let indiceFinal: number = this.imagenesGaleria.length-1;
    this.renderer.setStyle(frontal, 'background-image', `url(${this.imagenesGaleria[0].ruta}/${this.imagenesGaleria[0].nombre}.${this.imagenesGaleria[0].formato})`)
    this.renderer.setStyle(izquierda, 'background-image', `url(${this.imagenesGaleria[1].ruta}/${this.imagenesGaleria[1].nombre}.${this.imagenesGaleria[1].formato})`)
    this.renderer.setStyle(derecha, 'background-image', `url(${this.imagenesGaleria[indiceFinal].ruta}/${this.imagenesGaleria[indiceFinal].nombre}.${this.imagenesGaleria[indiceFinal].formato})`)
  }

  establecerDescripcion(){

    this.tituloTrabajo = this.menus[this.trabajoActual].titulo;
    this.descripcionTrabajo = this.menus[this.trabajoActual].descripcion;
  }

  entradaLogo(nombre:string){
    const logosArray = this.logos.toArray();
    for(let i = 0; i < this.empresas.length; i++){
      if(this.empresas[i].nombre == nombre){
        const logaso = logosArray[i].nativeElement;
        this.renderer.setStyle(logaso, 'width', '200px');
        this.renderer.setStyle(logaso, 'height', '200px');
      }
    }
  }

  salidaLogo(nombre:string){
    const logosArray = this.logos.toArray();
    for(let i = 0; i < this.empresas.length; i++){
      if(this.empresas[i].nombre == nombre){
        const logaso = logosArray[i].nativeElement;
        this.renderer.setStyle(logaso, 'width', '0px');
        this.renderer.setStyle(logaso, 'height', '0px');
      }
    }
  }

  goToSistemaDeGestion(){
    this.router.navigate(['sistema-de-gestion']);
    document.documentElement.scrollTop = 0;
  }

  goToSistemaVisualElectronica(){
    this.router.navigate(['sistema-visual-electronica']);
    document.documentElement.scrollTop = 0;
  }
}
