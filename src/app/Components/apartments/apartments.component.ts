import { Component } from '@angular/core';
import { Apartment } from '../../Models/Apartment'; 


@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})
export class ApartmentsComponent {
  apartments: Apartment[] = [
    {
      idappartment:1,
      apartNum: 1,
      floorNum: 1,
      surface: 80,
      terrace: true,
      surfaceterrace: 20,
      category: 'Luxury',
      ResidenceId: 1
    },
    {
      idappartment:2,
      apartNum: 2,
      floorNum: 2,
      surface: 75,
      terrace: false,
      surfaceterrace: 0,
      category: 'Standard',
      ResidenceId: 1
    }
  ];
  getAllappartments() {
    console.log(Apartment+ " "+ JSON.stringify(this.apartments));
  }
}
