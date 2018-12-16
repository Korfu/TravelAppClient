import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CountryService } from 'src/app/services/country.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/Models/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  public userForm: FormGroup;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  constructor(private formBuilder: FormBuilder,
              private countryService: CountryService,
              private userService: UserService,
              private router: Router) {  
               }
  
  ngOnInit() {
    this.userForm = this.formBuilder.group({
      firstName: '',
      lastName:  '',
    })

    // this.router= Router;

    this.countryService.getCountries().subscribe(countries => {
      this.dropdownList = countries; 
    } );
    this.selectedItems =[];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'countryId',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }   

  get f() { return this.userForm.controls; }

  onSubmit() {
    let userToAdd : User = new User;
    userToAdd.visitedCountries = this.selectedItems;
    userToAdd.firstName = this.userForm.value.firstName;
    userToAdd.lastName = this.userForm.value.lastName;
    this.userService.AddUser(userToAdd).subscribe(c => console.log("user has been added!"));
    
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
}
