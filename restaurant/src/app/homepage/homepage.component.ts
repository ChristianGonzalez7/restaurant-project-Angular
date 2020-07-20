import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  homepageImages: any

  constructor(private service: ServiceService) {
    this.homepageImages = new Array;
   }

  async ngOnInit() {
    this.homepageImages = await this.service.getHomepageImages();
  }



}
