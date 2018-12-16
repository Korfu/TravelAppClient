import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CountryService } from 'src/app/services/country.service';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  public userForm: FormGroup;
  submitted = false;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  user : User;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private countryService: CountryService,
              private userService: UserService) {  
               }
  
  ngOnInit() {
    this.getUser();
   
    this.userForm = this.formBuilder.group({
      firstName: '',
      lastName:  '',
    })

    this.countryService.getCountries().subscribe(countries => this.dropdownList = countries);
    this.selectedItems =this.user.visitedCountries;
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
  getUser(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.GetUser(id).subscribe(user => this.user = user);
  }

  get f() { return this.userForm.controls; }

  onEdit() {
    this.user.visitedCountries = this.selectedItems;
    this.user.firstName = this.userForm.value.firstName;
    this.user.lastName = this.userForm.value.lastName;
    this.userService.EditUser(this.user).subscribe(c => console.log("user has been edited!"));
  }
}
