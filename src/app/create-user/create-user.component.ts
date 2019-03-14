import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { UserService } from '../service/user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  userForm: FormGroup;
  enteredTitle = '';
  enteredDescript = '';
  isLoading = false;
  user: User;
  mode = 'create';
  btnTxt = 'Add User';
  private userId: string;

  constructor(public userService: UserService, public route: ActivatedRoute) {}

  ngOnInit() {
    this.userForm = new FormGroup({
      uname: new FormControl(null, {
        validators: [Validators.required, Validators.email]
      }),
      pw: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(6)]
      }),
      pwConfirm: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(6)]
      }),
      eng: new FormControl(true),
      admin: new FormControl(false),
      active: new FormControl(true)
    });
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('userId')) {
        this.mode = 'edit';
        this.btnTxt = 'Update User';
        this.userId = paramMap.get('userId');
        // console.log('User ID: ', this.userId);
        this.isLoading = true;
        this.userService.getUser(this.userId).subscribe(userData => {
          this.isLoading = false;
          this.user = {
            _id: userData._id,
            uname: userData.uname,
            pw: userData.pw,
            eng: userData.eng,
            admin: userData.admin,
            active: userData.active
          };
          // console.log('This User: ', this.user);
          this.userForm.setValue({
            uname: this.user.uname,
            pw: this.user.pw,
            pwConfirm: this.user.pw, // to match pw on db user call
            eng: this.user.eng,
            admin: this.user.admin,
            active: this.user.active
          });
        });
      } else {
        this.mode = 'create';
        this.btnTxt = 'Add User';
        this.userId = null;
      }
    });
  }

  onSaveUser() {
    if (this.userForm.invalid) {
      return;
    }
    this.isLoading = true;
    if (this.mode === 'create') {
      this.btnTxt = 'Create User';
      this.userService.addUser(
        this.userForm.value.uname,
        this.userForm.value.pw,
        this.userForm.value.eng,
        this.userForm.value.admin,
        this.userForm.value.active
      ); // check to see if status needs adding
    } else {
      this.userService.updateUser(
        this.userId,
        this.userForm.value.uname,
        this.userForm.value.pw,
        this.userForm.value.eng,
        this.userForm.value.admin,
        this.userForm.value.active
      );
    }
    this.userForm.reset();
  }
}
