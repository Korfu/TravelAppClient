import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { CountriesComponent } from './countries/countries.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { DeleteUserComponent } from './users/delete-user/delete-user.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent},
  { path: 'users', component: UsersComponent },
  { path: 'users/add-user', component: AddUserComponent},
  { path: 'users/:id', component: UserDetailComponent},
  { path: 'users/edit-user/:id', component: EditUserComponent},
  { path: 'users/delete-user/:id', component: DeleteUserComponent},
  { path: 'countries', component: CountriesComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
