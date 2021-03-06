import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelListComponent } from './components/hotel-list/hotel-list.component';
import { AddHotelComponent } from './components/add-hotel/add-hotel.component';
import { HotelDetailsComponent } from './components/hotel-details/hotel-details.component';


const routes: Routes = [
  { path: '', redirectTo: 'hotels', pathMatch: 'full' },
  { path: 'hotels', component: HotelListComponent },
  { path: 'hotels/:id', component: HotelDetailsComponent },
  { path: 'add', component: AddHotelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
