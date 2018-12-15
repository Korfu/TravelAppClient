import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { User } from '../Models/user';
import { UserService } from '../services/user.service';
import { Country } from '../Models/country';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[];
  countries: Country[];
  closeResult: string;

  constructor(private userService: UserService,
              private countryService: CountryService,
              private modalService: NgbModal) { }

  ngOnInit() {
    this.getUsers();
    this.GetCountries();
  }

  getUsers(): void{
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  GetCountries(){
    this.countryService.getCountries().subscribe(coutnries => this.countries = this.countries)
  }

  delete(userToDelete: User): void {
    this.userService.deleteUser(userToDelete).subscribe();
  }
}
