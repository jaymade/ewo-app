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
  private isAuthenticated = false;
  private users: User[] = [];
  private token: string;
  private tokenTimer: any;
  private authStatusListener = new Subject<boolean>();
  private usersUpdated = new Subject<User[]>();

  constructor(private http: HttpClient, private router: Router) {}
  getToken() {
    return this.token;
  }
  getIsAuth() {
    return this.isAuthenticated;
  }
  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  getUserList() {
    this.http
      .get<{ message: string; users: any }>('/api/users')
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
      uname: string;
      pw: string;
      eng: boolean;
      admin: boolean;
      active: boolean;
    }>('/api/users/' + id);
  }
  // update Users observable
  getUserUpdatedListener() {
    return this.usersUpdated.asObservable();
  }

  addUser(
    uname: string,
    pw: string,
    admin: boolean,
    eng: boolean,
    active: boolean
  ) {
    const user: User = {
      uname: uname,
      pw: pw,
      eng: eng,
      admin: admin,
      active: active,
      _id: null
    };

    this.http
      .post<{ message: string; userId: string }>(
        '/api/users',
        user
      )
      .subscribe(responseData => {
        // console.log('user resData: ', responseData.message);
        const id = responseData.userId;
        user._id = id;
        this.users.push(user);
        this.usersUpdated.next([...this.users]);
        this.router.navigate(['/users']);
      });
  }

  updateUser(
    _id: string,
    uname: string,
    pw: string,
    eng: boolean,
    admin: boolean,
    active: boolean
  ) {
    const user: User = {
      _id: _id,
      uname: uname,
      pw: pw,
      eng: eng,
      admin: admin,
      active: active
    };
    this.http
      .put('/api/users/' + _id, user)
      .subscribe(response => {
        const updatedUsers = [...this.users];
        const oldUserIndex = updatedUsers.findIndex(u => u._id === user._id);
        updatedUsers[oldUserIndex] = user;
        this.users = updatedUsers;
        this.usersUpdated.next([...this.users]);
        this.router.navigate(['/users']);
      });
  }
  // delete user
  deleteUser(userId: string) {
    this.http
      .delete('/api/users/' + userId)
      .subscribe(() => {
        // console.log('Deleted EWO: ' + ewoId);
        const updatedUsers = this.users.filter(user => user._id !== userId);
        this.users = updatedUsers;
        this.usersUpdated.next([...this.users]);
      });
  }
  login(uname: string, pw: string) {
    const userData = { uname: uname, pw: pw };
    this.http
      .post<{
        token: string;
        admin: boolean;
        active: boolean;
        expiresIn: number;
      }>('/api/login/', userData)
      .subscribe(response => {
        const token = response.token;
        this.token = token;
        if (token) {
          const expiresInDuration = response.expiresIn;
          // console.log('XP:', expiresInDuration);
          this.setAuthTime(expiresInDuration);
          this.isAuthenticated = true;
          this.authStatusListener.next(true);
          const now = new Date();
          const xpireDate = new Date(now.getTime() + expiresInDuration * 1000);
          console.log('XPIRE:', xpireDate);
          this.saveAuthData(token, xpireDate);
          this.router.navigate(['/eng']);
        }
      });
  }
  logout() {
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
    this.router.navigate(['/']);
  }
  autoAuthUser() {
    const authInfo = this.getAuthData();
    if (!authInfo) {
      return;
    }
    const now = new Date();
    const expiresIn = authInfo.xpire.getTime() - now.getTime();
    // console.log('AUTHINFO ', authInfo, 'XP: ', expiresIn);
    if (expiresIn > 0) {
      this.token = authInfo.token;
      this.isAuthenticated = true;
      this.setAuthTime(expiresIn / 1000);
      this.authStatusListener.next(true);
    }
  }
  private setAuthTime(duration: number) {
    console.log('Seting Timer: ' + duration);
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }
  private saveAuthData(token: string, experationDate: Date) {
    localStorage.setItem('token', token);
    // localStorage.setItem('admin', admin);
    // localStorage.setItem('active', active);
    localStorage.setItem('xpire', experationDate.toISOString());
  }
  private clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('xpire');
    // localStorage.setItem('admin', admin);
    // localStorage.setItem('active', active);
  }
  private getAuthData() {
    const token = localStorage.getItem('token');
    const xpire = localStorage.getItem('xpire');
    if (!token || !xpire) {
      return;
    }
    return {
      token: token,
      xpire: new Date(xpire)
    };
  }
}
