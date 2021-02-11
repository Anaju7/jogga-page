import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  Tela } from './tela-inicial/telaInicial.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Cadastro } from './Cadastro/cadastro.component';
import { Empresa } from './empresa/empresa.component';
import { Slider } from './Slider/slider.component';
import { Rodape } from './rodape/rodape.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { Parceiros } from './parceiros/parceiros.component';


@NgModule({
  declarations: [
    Tela,
    Cadastro,
    Empresa,
    Slider,
    Parceiros,
    Rodape,
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
