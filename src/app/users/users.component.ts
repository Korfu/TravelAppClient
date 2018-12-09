import { Component, OnInit } from '@angular/core';
import { User } from '../Models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void{
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  add(userToAdd: User) : void {
    this.userService.AddUser(userToAdd)
    .subscribe(user => this.users.push(userToAdd));
  }

}
