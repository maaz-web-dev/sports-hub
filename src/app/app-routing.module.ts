import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileDropdownComponent } from './drop-dropdown/drop-dropdown.component'
import {SignupComponent } from './signup/signup.component'
const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'profile', component: ProfileDropdownComponent },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
