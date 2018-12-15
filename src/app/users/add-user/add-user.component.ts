import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  userForm: FormGroup;
  submitted = false;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  constructor(private formBuilder: FormBuilder,
              private countryService: CountryService) {   }
  
  ngOnInit() {
    this.userForm = this.formBuilder.group({
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'visitedCountries': ['']
    })
    this.countryService.getCountries().subscribe(countries => this.dropdownList = countries);
    this.selectedItems =[];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }   

  get f() { return this.userForm.controls; }


  onSubmit() {
    this.submitted = true;
    if (this.userForm.invalid){
      return;
    }

    alert('Success! '+JSON.stringify(this.userForm.value))
  }

  saveUser(){
    if (this.userForm.dirty && this.userForm.valid) {
      alert(`Name: ${this.userForm.value.firstName}, Last name: ${this.userForm.value.lastName}`)
    }
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
}
