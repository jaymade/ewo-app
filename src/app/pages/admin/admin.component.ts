import { Component, OnInit } from '@angular/core';
import userlist from '../../../assets/data/users.json';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  users = userlist.users;
  constructor() {
    console.log('Reading local json files');
    if (this.users) {
      console.log('got user JSON');
    } else {
      console.log('error: no user JSON');
    }
  }

  ngOnInit() {
  }

}
