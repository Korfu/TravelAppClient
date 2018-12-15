import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  userForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {   }
  
  ngOnInit() {
    this.userForm = this.formBuilder.group({
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required]
    })
  }   

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
}
