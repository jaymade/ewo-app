import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import { stringify } from 'querystring';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(public userService: UserService) {}

  ngOnInit() {}
  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }
   this.userService.login(form.value.uname, form.value.pw);
  }
}
