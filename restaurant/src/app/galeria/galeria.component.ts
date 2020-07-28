import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  pizzas: any;
  burritos: any;
  salads: any;
  fries: any;

  constructor(private service: ServiceService) {
    this.pizzas = new Array;
    this.burritos = new Array;
    this.salads = new Array;
    this.fries = new Array;
   }

  async ngOnInit() {
    this.pizzas = await this.service.getMenusFood('pizza', 4);
    this.burritos = await this.service.getMenusFood('burrito', 4);
    this.salads = await this.service.getMenusFood('salad', 4);
    this.fries = await this.service.getMenusFood('fries', 4);
  }

}
