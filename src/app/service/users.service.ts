import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
  import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: Http) { }

  saveUser (user) {
    return this.http
    .post('http://localhost:8080/api/saveUser/', user)
    .map((response: Response) => response.json());
  }
  getUsers () {
    return this.http
      .get('http://localhost:8080/api/getUser/', user)
      .map((response: Response) => response.json());

  }
  deleteUser (id) {
    return this.http
      .post('http://localhost:8080/api/deleteUser/', {'is': id})
      .map((response: Response) => response.json());

  }

}
