import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ProductGuard implements CanActivate {
    constructor (private router:Router,private toastr: ToastrService){}
    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        let user:any[any] = JSON.parse(localStorage.getItem('currentUser') || '');
        if(user.role === 'supervisor'){
          this.toastr.success('Welcome',user.role,{timeOut:2000});
          return true;
        }
        this.toastr.error('You are not authorized to access this page',user.role,{timeOut:2000});
        return this.router.navigate(['/home']);
    }
  }
  
  
