import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { CountriesComponent } from './countries/countries.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  {path:'welcome', component: WelcomeComponent},
  { path: 'users', component: UsersComponent },
  { path: 'countries', component: CountriesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
