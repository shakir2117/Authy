import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ProductGuard implements CanActivate {
    constructor (private router:Router,private toastr: ToastrService,private cookie:CookieService){}
    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        let  role = this.cookie.get('role')
        if(role === 'supervisor'){
          this.toastr.success('Welcome',role,{timeOut:2000});
          return true;
        }
        this.toastr.error('You are not authorized to access this page',role,{timeOut:2000});
        return this.router.navigate(['/home']);
    }
  }
  
  
