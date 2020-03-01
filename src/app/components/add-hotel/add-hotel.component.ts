import { Component, OnInit } from '@angular/core';
import { RestServiceService } from 'src/app/services/rest-service.service';

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html'
})
export class AddHotelComponent implements OnInit {
  hotel = {
    hotel_name: '',
    stars: 1,
    address: ''
  };
  submitted = false;
  stars_hotel = [];

  constructor(private restService: RestServiceService) { }

  ngOnInit() {
    this.stars_hotel = [1,2,3,4,5];
  }

  saveHotel() {
    const data = {
      hotel_name: this.hotel.hotel_name,
      stars: this.hotel.stars,
      address: this.hotel.address
    }

    this.restService.create(data)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });


    this.submitted = true;
  }

  newHotel() {
    this.submitted = false;
    this.hotel = {
      hotel_name: '',
      stars: null,
      address: ''
    };
  }

}
