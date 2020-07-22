import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {

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
    this.pizzas = await this.service.getMenusFood('pizza');
    this.pizzas[0].price = '5 €';
    this.pizzas[1].price = '7 €';
    this.burritos = await this.service.getMenusFood('burrito');
    this.burritos[0].price = '4,30 €';
    this.burritos[1].price = '5,50 €';
    this.salads = await this.service.getMenusFood('salad');
    this.salads[0].price = '6,80 €';
    this.salads[1].price = '5,90 €';
    this.fries = await this.service.getMenusFood('fries');
    this.fries[0].price = '3,60 €';
    this.fries[1].price = '2,50 €';
  }

}
