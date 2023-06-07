import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../auth.service';
import { filter, from, switchMap, toArray } from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import { AccesseditComponent } from '../accessedit/accessedit.component';
@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.css']
})
export class AccessComponent implements OnInit {
  users: any = []//this is the array of users that we get from the server

  constructor(private http: HttpClient, private auth: AuthService,
    public dialog:MatDialog
    ) { }

  ngOnInit(): void {
    this.auth.getusers().subscribe((result: any) => {
      this.users = result
    })
  }

  searchuser(search: string) { //this function is called when we search for a user
    this.auth.getusers().pipe(
      switchMap((user) => from(user)),
      filter((user: any) => user.username.toLowerCase().includes(search.toLowerCase()) ||
        user.role.toLowerCase().includes(search.toLowerCase())),
      toArray()
    ).subscribe((filteredCustomers: any[]) => {
      this.users = filteredCustomers;
    });
  }


  edit: any = [] //this is the user that we want to edit and we pass it to the child component

  openedit!: boolean; //this is the boolean that to show the edit form
  edituser(user: any): void { //this function is called and we pass the user to be edited in child component
    this.openedit = true;
    this.edit = user;
    localStorage.setItem('userid',user.id);
    this.dialog.open(AccesseditComponent,{
      width:'50%',
    });
  }
  deleteuser(user: any) { //this function is called when we click on delete button to delete the user
    const id = user.id;
    this.http.delete('http://localhost:3000/users/' + id).subscribe((data: any) => {
      console.log('user deleted successfully', data);
      window.location.reload();
    });
  }
}
