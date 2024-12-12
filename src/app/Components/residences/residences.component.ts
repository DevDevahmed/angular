import { Component } from '@angular/core';
import {Residence} from "../../Models/Residence";
import { Form, FormBuilder ,FormGroup,Validators} from '@angular/forms';


@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {
  title: string = "liste des residences";
  searchTerm: string = '';
  residences: Residence[] =[
    {id:1,"name": "El fel","address":"Borj Cedria",
      "image":"../../assets/images/R1.jpg", status: "Disponible"},
    {id:2,"name": "El yasmine",
      "address":"Ezzahra","image":"../../assets/images/R2.jpg", status:
        "Disponible" },
    {id:3,"name": "El Arij",
      "address":"Rades","image":"../../assets/images/R3.jpg", status:
        "Vendu"},
    {id:4,"name": "El Anber","address":"inconnu",
      "image":"../../assets/images/R4.jpg", status: "En Construction"}
  ];

    
  

  submit(id: number) { alert("Residence id: " + id);

  }


  showLocation(address: string) {
    if (address == "inconnu") {
      alert("L'adresse de cette résidence est inconnue");
    } else {
      alert("Residence address: " + address);
    }
  }
  favoriteResidences: Residence[] = [];
  likeResidence(r: Residence) {
    if (r.liked) {
      // If already liked, remove it from the favorites list
      this.favoriteResidences = this.favoriteResidences.filter(res => res.id !== r.id);
      alert(`${r.name} has been removed from your favorites.`);
    } else {
      // If not liked, add it to the favorites list
      this.favoriteResidences.push(r);
      alert(`${r.name} has been added to your favorites!`);
    }

    // Toggle the liked state
    r.liked = !r.liked;
  }
  

  
  filteredByAdress() {
    return this.residences.filter(r =>
      r.address.toLowerCase().includes(this.searchTerm.toLowerCase()))
    ;
  }


  getAllResidences() {
    console.log(Residence+ " "+ JSON.stringify(this.residences));
  }

  submitSearch() {
    this.filteredByAdress();

  }
}
