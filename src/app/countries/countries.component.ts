import { Component, OnInit } from '@angular/core';
import { Country } from '../Models/country';

import { CountryService } from '../services/country.service';


@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  countries: Country[];

  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.getCountries();
  }

  getCountries(): void{
    this.countryService.getCountries().subscribe(countries => this.countries = countries);
  }
}
