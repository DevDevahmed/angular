import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidencesComponent } from './Components/residences/residences.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { ResidenceDetailsComponent } from './Components/residences/residence-details/residence-details.component';
import { AddresidenceComponent } from './Components/residences/addresidence/addresidence.component';
import { ApartmentsComponent } from './Components/apartments/apartments.component';
import { ApartmentParresidenceComponent } from './Components/apartments/apartment-parresidence/apartment-parresidence.component';
import { AddApartmentComponent } from './Components/apartments/add-apartment/add-apartment.component';

const routes: Routes = [
  {path:'residences',component:ResidencesComponent},
  {path:'',redirectTo:'/residences',pathMatch:'full'},
  {path:'details/:id',component:ResidenceDetailsComponent},
  { path: 'addresidence', component: AddresidenceComponent },
  { path: 'apartments', component: ApartmentsComponent },
  { path: 'apartments/:residenceId', component: ApartmentParresidenceComponent},
  { path: 'add-apartment', component: AddApartmentComponent },

  {path:'**',component:NotfoundComponent}
  
  
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
