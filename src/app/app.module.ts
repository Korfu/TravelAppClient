import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesComponent } from './countries/countries.component';
import { UsersComponent } from './users/users.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    UsersComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
