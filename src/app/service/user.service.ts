import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public userlist: User[] = [
    {
      username: 'BillyU@enewton.com',
      pw: 'newton',
      eng: true,
      admin: false,
      isactive: true,
    },
    {
      username: 'GregB@enewton.com',
      pw: 'newton',
      eng: true,
      admin: false,
      isactive: true,
    },
    {
      username: 'RobertH@enewton.com',
      pw: 'newton',
      eng: true,
      admin: false,
      isactive: true,
    },
    {
      username: 'JoeD@enewton.com',
      pw: 'newton',
      eng: true,
      admin: false,
      isactive: true,
    },
    {
      username: 'JayR@enewton.com',
      pw: 'newton',
      eng: true,
      admin: true,
      isactive: true,
    }
  ];

  constructor() {}
}
