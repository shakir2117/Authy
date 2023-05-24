import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {FormControl,FormBuilder, Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform = this.fb.group({
    username: [null, Validators.required],
    password: [null, Validators.compose([
      Validators.required, Validators.minLength(3), Validators.maxLength(14)])
    ],
    });


  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient,
    private router: Router,
    private fb: FormBuilder,
    private  auth: AuthService
    ) { }

  ngOnInit(): void {
    if (localStorage.getItem('currentUser')) {
      console.log('User is logged in');
      this.router.navigate(['/home'])
    }
  }


  

login(loginform:any){
if(this.loginform.valid){
  this.auth.login(this.loginform.value)
}else{
  alert('Invalid Username or Password');
}}
}
