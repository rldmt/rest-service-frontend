import { Component, OnInit } from '@angular/core';
import { RestServiceService } from 'src/app/services/rest-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html'
})
export class HotelListComponent implements OnInit {
  hotels: any;
  constructor(private restservice: RestServiceService, private router: Router) { }

  ngOnInit() {
    this.restservice.getAll().subscribe(
      data => {
        console.log(data);
        this.hotels = data;
      }
    )
  }

  deleteHotel(id: number) {
    this.restservice.delete(id)
      .subscribe(
        data => {
          this.restservice.getAll().subscribe(
            data => {
              console.log(data);
              this.hotels = data;
            })
        })
  }


}
