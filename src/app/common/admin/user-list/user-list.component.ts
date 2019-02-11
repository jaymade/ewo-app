import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { User } from '../../../models/user.model';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {

  users: User[] = [];
  isLoading = false;
  private usersSub: Subscription;
  constructor( public userService: UserService) {}

  ngOnInit() {
    this.isLoading = true;
    this.userService.getUserList();
    this.usersSub = this.userService
      .getUserUpdatedListener()
      .subscribe((users: User[]) => {
        this.isLoading = false;
        this.users = users;
      });
  }

  onDeleteUser(userId: string) {
    this.userService.deleteUser(userId);
  }

  ngOnDestroy() {
    this.usersSub.unsubscribe();
  }
}
