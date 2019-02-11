import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { Response, Headers, RequestOptions } from '@angular/http';

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
        userId: ['', Validators.required, Validators.email],
        pw: ['', [Validators.required, Validators.minLength(6)]],
        pwConfirm: ['', Validators.required],
        eng: true,
        admin: false,
        active: true
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
}
