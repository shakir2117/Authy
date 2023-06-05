import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {FormControl,FormBuilder, Validators} from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.compose([Validators.required,Validators.maxLength(15),Validators.minLength(3)])],
    status: [ 'inactive', Validators.required],
  });
  
  

  constructor(private http: HttpClient, private router: Router,private fb: FormBuilder,private auth:AuthService) { }

  ngOnInit(): void {
  }

  // valuedisabled() {
  //   console.log(this.registerForm);
    
  //   return this.registerForm.get('status')?.value?.includes('inactive');  }


  register(registerForm: any) {
    const data=this.registerForm.value
if(this.registerForm.valid){
  this.auth.register(data)
}else{
  alert("Invalid Credentials")
}
}
}
