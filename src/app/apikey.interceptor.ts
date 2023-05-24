import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';


import { MatSnackBar ,MatSnackBarConfig} from '@angular/material/snack-bar';

import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class ApikeyInterceptor implements HttpInterceptor {

  constructor(private snackBar: MatSnackBar) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const API_KEY = 'AIzaSyD0Z2Y1-_X8XrZLt-JmXhNz-3-Jh-5ztb4';
    return next.handle(request.clone({setHeaders: {API_KEY}})).pipe(
      catchError(err => {
        let errormessage:string
        if (err.status === 0) {
          // A client-side or network error occurred. Handle it accordingly.
          errormessage =  `An error occurred: ${err.message} `
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong.
          errormessage =  `Server Error code ${err.status}`
          
        }
        const config: MatSnackBarConfig = {
          panelClass: ['snackbar'],
          verticalPosition: 'top',
          horizontalPosition: 'right',
          duration: 3000
        };
        this.snackBar.open(errormessage, 'Close', config);

        // Return an observable with a user-facing error message.
        return throwError(() => new Error('Something bad happened; please try again later.'));
      })
    );
  }
}  
