import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err) => {
        // if ([401].includes(err.status)) {
        // auto logout if 401 or 403 response returned from api
        // this._token.removeToken();

        //   if (
        //     localStorage.getItem('clms_ref') != undefined &&
        //     localStorage.getItem('clms_ref') != null
        //   ) {
        //     this._authService.refreshToken().subscribe();
        //   } else {
        //     this._router.navigate(['/usr/signin']);
        //   }
        // }
        return throwError(() => err.error);

        // return throwError(() => new Error(err.error));
      })
    );
  }
}
