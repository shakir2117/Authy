import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  ngOnInit() {
  }
storage:any= localStorage.getItem('currentUser');
user:any=JSON.parse(this.storage);
constructor(private auth:AuthService){}

logout(){
  this.auth.logout();
}
}
