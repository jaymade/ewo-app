import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { UserService } from '../../../service/user.service';
import { User } from '../../../models/user.model';

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
  private uId: string;

  constructor(public userService: UserService, public route: ActivatedRoute) {}

  ngOnInit() {
    this.userForm = new FormGroup({
      userId: new FormControl(null, {
        validators: [Validators.required, Validators.email]
      }),
      pw: new FormControl(null, {
        validators: [
          Validators.required,
           Validators.minLength(6)]
      }),
      pwConfirm: new FormControl(null, {
        validators: [
          Validators.required,
          Validators.minLength(6)]
      }),
      eng: new FormControl(''),
      admin: new FormControl(''),
      active: new FormControl('active')
    });
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('uId')) {
        this.mode = 'edit';
        this.btnTxt = 'Update';
        this.uId = paramMap.get('uId');
        this.isLoading = true;
        this.userService.getUser(this.uId).subscribe(userData => {
          this.isLoading = false;
          this.user = {
            _id: userData._id,
            userId: userData.userId,
            pw: userData.pw,
            eng: userData.eng,
            admin: userData.admin,
            active: userData.active
          };
          this.userForm.setValue({
            userId: this.user.userId,
            pw: this.user.pw,
            eng: this.user.eng,
            admin: this.user.admin,
            active: this.user.active
          });
        });
      } else {
        this.mode = 'create';
        this.uId = null;
      }
    });
  }

  onSaveUser() {
    if (this.userForm.invalid) {
      return;
    }
    this.isLoading = true;
    if (this.mode === 'create') {
      this.userService.addUser(
        this.userForm.value.userId,
        this.userForm.value.pw,
        this.userForm.value.eng,
        this.userForm.value.admin,
        this.userForm.value.active
      ); // check to see if status needs adding
    } else {
      this.userService.updateUser(
        this.uId,
        this.userForm.value.userId,
        this.userForm.value.pw,
        this.userForm.value.eng,
        this.userForm.value.admin,
        this.userForm.value.active
      );
    }
    this.userForm.reset();
  }

}
