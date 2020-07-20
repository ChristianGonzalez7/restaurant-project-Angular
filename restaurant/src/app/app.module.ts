import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenusComponent } from './menus/menus.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { Restaurante1Component } from './restaurante1/restaurante1.component';

import { HomepageComponent } from './homepage/homepage.component';
import { HistoriaComponent } from './historia/historia.component';
import { EquipoComponent } from './equipo/equipo.component';

@NgModule({
  declarations: [
    AppComponent,
    MenusComponent,
    GaleriaComponent,
    Restaurante1Component,
    HomepageComponent,
    EquipoComponent,
    HistoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
