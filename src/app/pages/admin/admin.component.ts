import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { Response, Headers, RequestOptions } from '@angular/http';
import { createOfflineCompileUrlResolver } from '@angular/compiler';
// import { MustMatch } from '../../_helpers/must-match.validator';
import { ConfirmEqualDirective } from './../../_helpers/confirm-equal.directive';

// import userlist from '../../../assets/data/users.json';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  userForm: FormGroup;
  submitted = false;
  userlist = [];

  ngOnInit() {
    this.userForm = this.fb.group(
      {
        uname: ['', Validators.required, Validators.email],
        pw1: ['', [Validators.required, Validators.minLength(6)]],
        pw2: ['', Validators.required],
        check_eng: true,
        check_admin: false,
        check_active: true
      }
    );
  }

  // convenience getter for easy access to form fields
  get f(): any {
    return this.userForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    // stop if invalid
    if (this.userForm.invalid) {
      return;
    }


    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.userForm.value));
  }
  onLoadDataClick(): void {
    // this.userForm.setValue({
    //   uname: 'enewton',
    //   pw1: 'paaaaswd',
    //   pw2: 'paaswd',
    //   check_eng: true,
    //   check_admin: true,
    //   check_active: true
    // });
  }
  save() {}
  delete() {}
  edit() {}
}
