import { Component, OnInit } from '@angular/core';
import { RestServiceService } from 'src/app/services/rest-service.service';
import { Hotel } from '../hotel';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit {
  hotel: any = null;
  msg = '';

  constructor(private restservice: RestServiceService, 
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.msg = '';
    this.getHotel(this.route.snapshot.paramMap.get('id'))
  }

  getHotel(id) {
    this.restservice.get(id)
      .subscribe(data =>{
        this.hotel = data;
        console.log(data);
      },
      error => {
        console.log(error);
      })
  }

  deleteHotel() {
    this.restservice.delete(this.hotel.id)
      .subscribe(data => {
          this.hotel = data
          this.router.navigate(['/hotels'])
      })
  }

  updateHotel() {
    this.restservice.update(this.hotel.id, this.hotel)
      .subscribe(
        data => {
          console.log(data)
          this.msg = 'updated succesfully';
          this.router.navigate(['/hotels'])
        },
        error => {
          console.log(error);
        })
  }
}
