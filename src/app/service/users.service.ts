import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  errorMessage;
  constructor(private http: Http) {}

  addUser(userinfo) {
    return this.http
      .post('http://localhost:8080/api/saveUser/', userinfo)
      .pipe(
        map(response => response.json()
        )
      );
  }
  getUser(id) {
    return this.http
      .get('http://localhost:8080/api/getUser/', id)
      .pipe(map((response: Response) => response.json()));
  }
  getUsers() {
    return this.http
      .get('http://localhost:8080/api/getUsers/')
      .pipe(map((response: Response) => response.json()));
  }
  deleteUser(id) {
    return this.http
      .post('http://localhost:8080/api/deleteUser/', { id: id })
      .pipe(map((response: Response) => response.json()));
  }
}
