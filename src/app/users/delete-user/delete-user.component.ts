import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  user: User;

  constructor(private route: ActivatedRoute,
              private userService: UserService,
              private location: Location) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.GetUser(id).subscribe(user => this.user = user);
  }

  deleteUser(userToDelete: User): void {
    this.userService.deleteUser(userToDelete).subscribe(success => console.log("User {{user.firstName}} {{user.lastName}} has been deleted"));
  }
}
