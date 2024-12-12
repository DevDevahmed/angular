import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addresidence',
  templateUrl: './addresidence.component.html',
  styleUrls: ['./addresidence.component.css']
})
export class AddresidenceComponent {
  residenceForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.residenceForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      address: ['', Validators.required],
      image: ['', Validators.required],
      status: ['Disponible', Validators.required]
    });
  }

  add(): void {
    if (this.residenceForm.valid) {
      const newResidence = this.residenceForm.value;
      console.log('Residence added:', newResidence);
    }
  }
}
