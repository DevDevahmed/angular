import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apartment } from 'src/app/Models/Apartment'; // Adjust the path based on your project structure

@Component({
  selector: 'app-apartment-parresidence',
  templateUrl: './apartment-parresidence.component.html',
  styleUrls: ['./apartment-parresidence.component.css'],
})
export class ApartmentParresidenceComponent {
  apartments: Apartment[] = [
    {
      idappartment: 1,
      apartNum: 1,
      floorNum: 1,
      surface: 80,
      terrace: true,
      surfaceterrace: 20,
      category: 'Luxury',
      ResidenceId: 1,
    },
    {
      idappartment: 2,
      apartNum: 2,
      floorNum: 2,
      surface: 75,
      terrace: false,
      surfaceterrace: 0,
      category: 'Standard',
      ResidenceId: 1,
    },
  ];
  residenceId!: number;
  filteredApartments: Apartment[] = [];
  selectedApartment?: Apartment;
  currentIndex: number = 0;

  constructor(private ac: ActivatedRoute, private router: Router) {
    this.residenceId = +this.ac.snapshot.params['residenceId'];

    this.filteredApartments = this.apartments.filter(
      (apartment) => apartment.ResidenceId === this.residenceId
    );

    if (this.filteredApartments.length > 0) {
      this.selectedApartment = this.filteredApartments[0];
      this.currentIndex = 0;
    }
  }

  selectApartment(index: number): void {
    this.currentIndex = index;
    this.selectedApartment = this.filteredApartments[index];
  }
}
