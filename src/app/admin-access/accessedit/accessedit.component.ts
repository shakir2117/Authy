import { Component, Input,Output, EventEmitter, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-accessedit',
  templateUrl: './accessedit.component.html',
  styleUrls: ['./accessedit.component.css']
})
export class AccesseditComponent implements  OnInit , AfterViewInit{
  useredit:any=[];
  editForm = this.fb.group({
    username: ['', Validators.required],
    role: ['', Validators.required],
    status: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    password: ['', Validators.required],
    image: [''],

  });
  userdetailsedit: boolean=false;
  image!: string;
  imglength:number = 0;

  constructor(private fb: FormBuilder, private http: HttpClient,public dialogref:MatDialogRef<AccesseditComponent>) { }
  ngAfterViewInit(): void {
    setTimeout(() => {
      let userid= localStorage.getItem('userid');
      this.http.get('http://localhost:3000/users/'+userid).subscribe((data: any) => {
        this.useredit=data;
        this.editForm.patchValue({
          username: this.useredit.username,
          role: this.useredit.role,
          status: this.useredit.status,
          firstName: this.useredit.firstName,
          lastName: this.useredit.lastName,
          password: this.useredit.password,
          image: this.useredit.image,
        });
        this.image = this.useredit.image;
        this.imglength=this.image.length;
      }); 
    });
  }
  ngOnInit(): void {        
    
  }

  removeimage(){
    this.image='';
    this.imglength=0;
    this.editForm.patchValue({
      image: this.image
    });
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
          this.editForm.patchValue({
            image: this.image
          });
        }
      };
    }


  edituserdetails(){    
    this.userdetailsedit=true;
    console.log(this.userdetailsedit);
  }
  onSubmit(editForm: any) {
    const id = this.useredit.id;
    console.log('change status', id ,this.userdetailsedit);
    this.http.put('http://localhost:3000/users/' + id, editForm).subscribe((data: any) => {
     console.log('user updated successfully',data);
      window.location.reload();
    });
  }
}
