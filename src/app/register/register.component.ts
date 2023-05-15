import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {FormControl,FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  loginform = this.fb.group({
    Username: [null, Validators.required],
    password: [null, Validators.compose([
      Validators.required, Validators.minLength(8), Validators.maxLength(14)])
    ],
    });
  

  constructor(private http: HttpClient, private router: Router,private fb: FormBuilder) { }

  ngOnInit(): void {
  }


  register(username: string, password: string) {
    console.log('Registering user:', username, password);
    const user = { username: username, password: password };
    this.http.post('http://localhost:3000/users', user).subscribe(data => {
      console.log('Registration successful:', data);
      this.router.navigate(['/login']);
    });
  }
  



}
