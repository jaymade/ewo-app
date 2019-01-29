import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UsersService } from './../../service/users.service';
import { Response, Headers, RequestOptions } from '@angular/http';
import { createOfflineCompileUrlResolver } from '@angular/compiler';

// import userlist from '../../../assets/data/users.json';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  constructor(private userService: UsersService) {}
  userForm: FormGroup;
  userlist;
  buttonValue = 'Add New User';
  errorMessage;


  ngOnInit() {
    this.userForm = new FormGroup({
      uname: new FormControl(),
      pw1: new FormControl(),
      eng: new FormControl(),
      admin: new FormControl()
    });
  }
  pwCheck(pw1: string, pw2: string) {}

  onSave(userInfo, isvalid: boolean) {
    // userInfo.mode = this.valbutton;
    this.userService.addUser(userInfo).subscribe(
      data => {
        alert(data.data);
        this.ngOnInit();
      },
      error => (this.errorMessage = error)
    );
  }
  edit = function(user) {
    this.userId = user.userId;
    this.pw = user.pw;
    this.eng = user.eng;
    this.admin = user.admin;
    this.valbutton = 'Update';
  };
  delete = function(id) {
    this.userService.deleteUser(id).subscribe(
      data => {
        alert(data.data);
        this.ngOnInit();
      },
      error => (this.errorMessage = error)
    );
  };
  onSubmit(): void {
  console.log(this.userForm.value);
  }
}
