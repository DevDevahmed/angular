import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.css']
})
export class AddApartmentComponent {
  apartmentForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.apartmentForm = this.fb.group({
      apartNum: [null, [Validators.required, Validators.min(1)]],
      floorNum: [null, [Validators.required, Validators.min(1)]],
      surface: [null, [Validators.required, Validators.min(1)]],
      category: ['Luxury', Validators.required],
      terrace: [false],
      surfaceterrace: [null]
    });
  }

  onSubmit() {
    if (this.apartmentForm.valid) {
      const newApartment = this.apartmentForm.value;
      console.log('New apartment created:', newApartment);
      
      // Navigate back to the apartments list page or perform your desired action
      this.router.navigate(['/apartments']);
    }
  }
}
