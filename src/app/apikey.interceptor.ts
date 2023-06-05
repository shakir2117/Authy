import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class ApikeyInterceptor implements HttpInterceptor {
  constructor(private toastr: ToastrService) {}
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const API_KEY = 'AIzaSyD0Z2Y1-_X8XrZLt-JmXhNz-3-Jh-5ztb4';
    return next.handle(request.clone({setHeaders: {API_KEY}})).pipe(
      catchError( err => {
        let errormessage:string
        if (err.status === 0) {
          // A client-side or network error occurred. Handle it accordingly.
          errormessage =  `An error occurred: ${err.message}`
        } else if((!(err instanceof HttpErrorResponse))) {
          // The backend returned an unsuccessful response code.
          errormessage =  err.rejection;
          
        }
        else{
          errormessage =  `Server Error code ${err.status}`
        }
        this.toastr.error(errormessage, 'Error', { timeOut: 3000})
        // Return an observable with a user-facing error message.
        return throwError(() => new Error('Something bad happened; please try again later.'));
      })
    );
  }
}  
