import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Country } from "../models/country";

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private countriesURL =  'https://localhost:44338/api/Country'
  
  constructor(private http: HttpClient) { }

  getCountries(): Observable<Country[]>{
      return this.http.get<Country[]>(this.countriesURL);
  }

  getCountry(id: number) : Observable<Country> {
    const url = `${this.countriesURL}/${id}`;
    return this.http.get<Country>(url);
  } 
}