  import { Component } from '@angular/core';
  import { Router } from '@angular/router';
  import { HttpClient } from '@angular/common/http';
  import { FormControl, FormBuilder, Validators } from '@angular/forms';
  import { AuthService } from '../../auth.service';
  import { ToastrService } from 'ngx-toastr';


  @Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
  })
  export class RegisterComponent {
    image!: string;
    registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.compose([Validators.required, Validators.maxLength(15), Validators.minLength(3)])],
      status: ['inactive', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      image: [''],
    });



    constructor(private http: HttpClient,private toastr:ToastrService, private router: Router, private fb: FormBuilder, private auth: AuthService) { }

    ngOnInit(): void {
    }
    
    upload:boolean=false;
    onFileSelected(event:any) {
      this.upload=true;
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (reader.result) {
          this.image = reader.result.toString().split(',')[1];
          console.log(this.image);
          this.registerForm.patchValue({
            image: this.image
          });
        }
      };
    }


    register(registerForm: any) {
      let user = undefined;
      this.http.get('http://localhost:3000/users?username=' + registerForm.username).subscribe((data: any) => {
        user = data;
        console.log(user);
        if (user.length == 0) {
          const data = this.registerForm.value
          if (this.registerForm.valid) {
            console.log(registerForm);
            this.auth.register(data)
          } else {
            this.toastr.error("Invalid Credentials")
          }
        }
        else{
          this.toastr.error("User already exists")
        }
      });
    }
  }
