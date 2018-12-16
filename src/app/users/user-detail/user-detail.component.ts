import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/services/user.service';
import {Location} from '@angular/common';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
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

  backClicked() : void {
    this.location.back();
  }
}
