import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { filter, from, switchMap, toArray } from 'rxjs';
@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.css']
})
export class AccessComponent implements OnInit{
  users:any=[]
  
    constructor(private http:HttpClient,private auth:AuthService) { }
  
    ngOnInit(): void {
      this.auth.getusers().subscribe((result:any)=>{
        this.users=result
        console.log(this.users);
      })
    }
    searchuser(search: string) {
      this.auth.getusers().pipe(
         switchMap((user) => from(user)),
        filter((user: any) => user.username.toLowerCase().includes(search.toLowerCase()) || 
        user.role.toLowerCase().includes(search.toLowerCase())), 
        toArray() 
      ).subscribe((filteredCustomers: any[]) => {
        console.log(filteredCustomers);
        this.users = filteredCustomers;
      });
    }
    edit:any=[]
  edituser(user: any): void {
    this.edit=user;
    console.log('User to be edited', this.edit);
  }

  onSubmit(editForm: any[]){
    const id = this.edit.id;
    this.http.put('http://localhost:3000/users/' + id, editForm).subscribe((data: any) => {

      console.log('user updated successfully',data);
      window.location.reload();
    });
  }

}
