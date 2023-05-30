import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router, private toastr: ToastrService) { }




  login(loginform: any) {
    const username = loginform.username;
    const password = loginform.password;
    this.http.get('http://localhost:3000/users?username=' + username + '&password=' + password).subscribe((data: any) => {
      if (data.length > 0) {
        console.log('Data:', data)
        localStorage.setItem('currentUser', JSON.stringify(data[0]));
        this.router.navigate(['/home']);
        this.toastr.success('User Logged In Successfully', 'Success', { timeOut: 3000 });
      }
      else {
        this.toastr.error('Invalid Credentials', 'Error', { timeOut: 3000 });
      }
    });
  }

  register(registerForm: any) {
    this.http.post('http://localhost:3000/users', registerForm).subscribe(data => {
      console.log('Registration successful:', data);
      this.router.navigate(['/login']);
      this.toastr.success('User Registered Successfully', 'Success', { timeOut: 3000 });
    });
  }

  logout() {
    localStorage.clear()
    this.router.navigate(['/login'])
  }
}
