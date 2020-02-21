import { Component, OnInit } from '@angular/core';
import { RestServiceService } from 'src/app/services/rest-service.service';
import { Hotel } from '../hotel';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html'
})
export class HotelListComponent implements OnInit {
  hotels: any;
  constructor(private restservice: RestServiceService) { }

  ngOnInit() {
    this.restservice.getAll().subscribe(
      data => {
        console.log(data);
        this.hotels = data;
      }
    )
  }

}
