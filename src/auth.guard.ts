import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor (private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('AuthGuard canActivate called');
    if (localStorage.getItem('currentUser')) {
      // User is logged in
      console.log('User is logged in');
      return true;
    }
  
    // User is not logged in, redirect to login page
    console.log('User is not logged in, redirecting to login page');
    return this.router.navigate(['/login']);
  }
  
  

  
}
