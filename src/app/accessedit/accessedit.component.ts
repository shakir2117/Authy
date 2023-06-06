import { Component, Input,Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-accessedit',
  templateUrl: './accessedit.component.html',
  styleUrls: ['./accessedit.component.css']
})
export class AccesseditComponent implements OnChanges, OnInit {
  @Input() useredit:any=[];
  // @Output() usereditChange = new EventEmitter<any>();
  // @Output() userdetailseditChange = new EventEmitter<any>();
  editForm = this.fb.group({
    username: ['', Validators.required],
    role: ['', Validators.required],
    status: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    password: ['', Validators.required],
  });
  userdetailsedit!: boolean;

  constructor(private fb: FormBuilder, private http: HttpClient) { }
  ngOnInit(): void {      
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['useredit'] && changes['useredit'].currentValue) {
      this.editForm.patchValue({
        username: this.useredit.username,
        role: this.useredit.role,
        status: this.useredit.status,
        firstName: this.useredit.firstName,
        lastName: this.useredit.lastName,
        password: this.useredit.password,
      });
    }
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
