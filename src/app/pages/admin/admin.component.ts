import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { UserService } from '../../service/user.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Response, Headers, RequestOptions } from '@angular/http';
import { User } from '../../models/user.model';
import { Subscription } from 'rxjs';

// import userlist from '../../../assets/data/users.json';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
