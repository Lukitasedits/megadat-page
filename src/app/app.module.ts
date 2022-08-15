import { MenuService } from './services/menu.service';
import { EmpresasService } from './services/empresas-service';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { WindowDirective } from './directives/window.directive';
import { BotonProComponent } from './boton-pro/boton-pro.component';
import { CircuitoScrollComponent } from './circuito-scroll/circuito-scroll.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SistemaDeGestionComponent } from './sistema-de-gestion/sistema-de-gestion.component';
import { SistemaVisualElectronicaComponent } from './sistema-visual-electronica/sistema-visual-electronica.component';
import { NumberFormatDirective } from './directives/numberFormat.directive';
import { TitlecaseDirective } from './directives/titlecase.directive';
import { FormContactoDirective } from './directives/form-contacto.directive';
const routes: Routes = [
  {path:'', redirectTo:'/inicio', pathMatch:'full'},
  {path:'inicio', component: HomeComponent},
  {path: 'sistema-de-gestion', component: SistemaDeGestionComponent},
  {path: 'sistema-visual-electronica', component: SistemaVisualElectronicaComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WindowDirective,
    BotonProComponent,
    CircuitoScrollComponent,
    FooterComponent,
    HeaderComponent,
    SistemaDeGestionComponent,
    SistemaVisualElectronicaComponent,
    NumberFormatDirective,
    TitlecaseDirective,
    FormContactoDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    EmpresasService,
    EmpresasService,
    MenuService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
