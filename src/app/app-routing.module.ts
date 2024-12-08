import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidencesComponent } from './Components/residences/residences.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { ResidenceDetailsComponent } from './Components/residences/residence-details/residence-details.component';

const routes: Routes = [
  {path:'residences',component:ResidencesComponent},
  {path:'',redirectTo:'/residences',pathMatch:'full'},
  {path:'details/:id',component:ResidenceDetailsComponent},
  {path:'**',component:NotfoundComponent}
  
  
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
