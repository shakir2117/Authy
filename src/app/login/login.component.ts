import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {FormControl,FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform = this.fb.group({
    Username: [null, Validators.required],
    password: [null, Validators.compose([
      Validators.required, Validators.minLength(8), Validators.maxLength(14)])
    ],
    });


  constructor(private http: HttpClient, private router: Router,private fb: FormBuilder) { }

  ngOnInit(): void {
    if (localStorage.getItem('currentUser')) {
      console.log('User is logged in');
      this.router.navigate(['/home'])
    }
  }

  login(username: string, password: string) {
    console.log('Logging in user:', username, password);
    this.http.get('http://localhost:3000/users?username=' + username + '&password=' + password).subscribe((data: any) => {
      console.log('Data:', data);
      if (data.length > 0) {
        localStorage.setItem('currentUser', JSON.stringify(data[0]));
        this.router.navigate(['/home']);
      } else {
        alert('Invalid username or password');
      }
    });
  }

}
