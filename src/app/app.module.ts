import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ResidencesComponent } from './Components/residences/residences.component';
import {FormsModule} from "@angular/forms";
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ResidenceDetailsComponent } from './Components/residences/residence-details/residence-details.component';
import { AddresidenceComponent } from './Components/residences/addresidence/addresidence.component';
import { ApartmentsComponent } from './Components/apartments/apartments.component';
import { ApartmentParresidenceComponent } from './Components/apartments/apartment-parresidence/apartment-parresidence.component';
import { AddApartmentComponent } from './Components/apartments/add-apartment/add-apartment.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ResidencesComponent,
    NotfoundComponent,
    FooterComponent,
    ResidenceDetailsComponent,
    AddresidenceComponent,
    ApartmentsComponent,
    ApartmentParresidenceComponent,
    AddApartmentComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
