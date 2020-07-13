import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Restaurante1Component } from './restaurante1/restaurante1.component';
import { MenusComponent } from './menus/menus.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HistoriaComponent } from './historia/historia.component';
import { EquipoComponent } from './equipo/equipo.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/homepage'},
  {path: 'homepage', component: HomepageComponent},
  {path: 'restaurante1', component: Restaurante1Component},
  {path: 'menus', component: MenusComponent},
  {path: 'galeria', component: GaleriaComponent},
  {path: 'historia', component: HistoriaComponent},
  {path: 'equipo', component: EquipoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
