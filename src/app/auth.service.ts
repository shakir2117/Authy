import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiURL = environment.apiurl;

  constructor(private http: HttpClient, private router: Router, private toastr: ToastrService,
    private cookie:CookieService) { }


  login(loginform: any) {
    const username = loginform.username;
    const password = loginform.password;
    this.http.get(this.apiURL+'users?username=' + username + '&password=' + password).subscribe((data: any) => {
      if (data.length > 0) {
        this.cookie.set('login','true')
        console.log('Data:', data)
        this.cookie.set('Username', data[0].username, 1, '/', '', false, 'Strict');
        this.cookie.set('role', data[0].role, 1, '/', '', false, 'Strict');
        this.router.navigate(['/home']);
        this.toastr.success('User Logged In Successfully', 'Success', { timeOut: 3000 });
      }
      else {
        this.toastr.error('Invalid Credentials', 'Error', { timeOut: 3000 });
      }
    });
  }

  register(registerForm: any) {
    this.http.post(this.apiURL+'users', registerForm).subscribe(data => {
      console.log('Registration successful:', data);
      this.router.navigate(['/login']);
      this.toastr.success('User Registered Successfully', 'Success', { timeOut: 3000 });
    });
  }

  logout() {
    this.cookie.deleteAll()
    this.router.navigate(['/login'])
  }
}
