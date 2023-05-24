import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }




  login(loginform: any) {
    const username=loginform.username;
    const password=loginform.password;
    this.http.get('http://localhost:3000/users?username=' + username + '&password=' + password).subscribe((data: any) => {
      if(data.length>0){
        console.log('Data:', data)
        localStorage.setItem('currentUser', JSON.stringify(data[0]));
        this.router.navigate(['/home']);
      }
      else{
        alert("Invalid Username or Password");
      }
    });
  }


  register(registerForm: any) {
    this.http.post('http://localhost:3000/users', registerForm).subscribe(data => {
      console.log('Registration successful:', data);
      this.router.navigate(['/login']);
    });
  }
}
