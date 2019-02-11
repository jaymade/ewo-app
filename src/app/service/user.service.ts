import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
// import { map } from 'rxjs/operators';

import { User } from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [];
  private usersUpdated = new Subject<User[]>();

  constructor(private http: HttpClient, private router: Router) {}

  getUserList() {
    this.http
      .get<{ message: string; users: any }>('http://localhost:3000/api/users')
      // .pipe(
      //   map(ewoData => {
      //     return ewoData.ewos.map(ewo => {
      //       return {
      //         title: ewo.title,
      //         discript: ewo.descript,
      //         id: ewo._id
      //       };
      //     });
      //   })
      // )
      .subscribe(mapedUsers => {
        this.users = mapedUsers.users;
        this.usersUpdated.next([...this.users]);
      });
  }
  // get user by ID
  getUser(id: string) {
    // console.log(id);
    // return { ...this.ewos.find(e => e._id === id) };
    return this.http.get<{
      _id: string;
      userId: string;
      pw: string;
      eng: boolean;
      admin: boolean;
      active: boolean;
    }>('http://localhost:3000/api/users/' + id);
  }
  // update Users observable
  getUserUpdatedListener() {
    return this.usersUpdated.asObservable();
  }

  addUser(
    userId: string,
    pw: string,
    admin: boolean,
    eng: boolean,
    active: boolean
  ) {
    const user: User = {
      userId: userId,
      pw: pw,
      eng: eng,
      admin: admin,
      active: active,
      _id: null
    };

    this.http
      .post<{ message: string; userId: string }>(
        'http://localhost:3000/api/users',
        user
      )
      .subscribe(responseData => {
        console.log('user resData: ', responseData.message);
        const id = responseData.userId;
        user._id = id;
        this.users.push(user);
        this.usersUpdated.next([...this.users]);
        // this.router.navigate(['/']);
      });
  }

  updateUser(
    _id: string,
    userId: string,
    pw: string,
    eng: boolean,
    admin: boolean,
    active: boolean
  ) {
    const user: User = {
      _id: _id,
      userId: userId,
      pw: pw,
      eng: eng,
      admin: admin,
      active: active
    };
    this.http
      .put('http://localhost:3000/api/users/' + _id, user)
      .subscribe(response => {
        const updatedUsers = [...this.users];
        const oldUserIndex = updatedUsers.findIndex(u => u._id === user._id);
        updatedUsers[oldUserIndex] = user;
        this.users = updatedUsers;
        this.usersUpdated.next([...this.users]);
        this.router.navigate(['/']);
      });
  }
  // delete user
  deleteUser(userId: string) {
    this.http
      .delete('http://localhost:3000/api/users/' + userId)
      .subscribe(() => {
        // console.log('Deleted EWO: ' + ewoId);
        const updatedUsers = this.users.filter(user => user._id !== userId);
        this.users = updatedUsers;
        this.usersUpdated.next([...this.users]);
      });
  }
}
