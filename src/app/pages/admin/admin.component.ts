import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from './../../service/users.service';
import { Response, Headers, RequestOptions } from '@angular/http';
import { createOfflineCompileUrlResolver } from '@angular/compiler';
// import { MustMatch } from '../../_helpers/must-match.validator';

// import userlist from '../../../assets/data/users.json';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  userForm: FormGroup;
  userlist;
  buttonValue = 'Add New User';
  errorMessage;

  ngOnInit() {
    this.userForm = this.fb.group({
      uname: ['', Validators.required, Validators.email],
      pw1: ['', [Validators.required, Validators.minLength(6)]],
      pw2: ['', Validators.required],
      check_eng: true,
      check_admin: false
    }
    // ,{
    //   validator: MustMatch('pw1', 'pw2')
    // }
    );
  }
  pwCheck(pw1: string, pw2: string) {}

  // onSave(userInfo, isvalid: boolean) {
  //   // userInfo.mode = this.valbutton;
  //   this.userService.addUser(userInfo).subscribe(
  //     data => {
  //       alert(data.data);
  //       this.ngOnInit();
  //     },
  //     error => (this.errorMessage = error)
  //   );
  // }
  edit() {
    // this.userId = user.userId;
    // this.pw = user.pw;
    // this.eng = user.eng;
    // this.admin = user.admin;
    // this.valbutton = 'Update';
  }
  delete() {
    // this.userService.deleteUser(id).subscribe(
    //   data => {
    //     alert(data.data);
    //     this.ngOnInit();
    //   },
    //   error => (this.errorMessage = error)
    // );
  }

  onSubmit(): void {
    console.log(this.userForm.value);
    console.log(this.userForm.touched);
    console.log(this.userForm.controls.uname.value);
    console.log(this.userForm.get('uname').value);
  }
  onLoadDataClick(): void {
    this.userForm.setValue({
      uname: 'enewton',
      pw1: 'new-password',
      pw2: 'new-password',
      check_eng: true,
      check_admin: false
    });
  }
}
