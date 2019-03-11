import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { UserService } from 'src/app/service/user.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private userService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ) {
    const authToken = this.userService.getToken();
    const authRequest = req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + authToken )
    });
    return next.handle(authRequest);
  }
}
