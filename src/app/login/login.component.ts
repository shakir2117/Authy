import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl,FormBuilder, Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';
import { NgxUiLoaderService } from 'ngx-ui-loader';




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
    private toastr: ToastrService,
    private router: Router,
    private fb: FormBuilder,
    private  auth: AuthService,
    private cookie: CookieService,
    private ngxLoader: NgxUiLoaderService
    ) { }

  ngOnInit(): void {
    if (this.cookie.check('login')==true) {
      console.log('User is logged in already');
      this.router.navigate(['/home'])
    }
  }
login(loginform:any){
if(this.loginform.valid){
  this.ngxLoader.start();
  this.auth.login(this.loginform.value)
  this.ngxLoader.stop();  
}else{
  this.toastr.error('Invalid Credentials')
}}
}
