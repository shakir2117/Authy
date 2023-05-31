import { Component,OnInit} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private http: HttpClient , private route:Router) {}

  ngOnInit() {
    let user:any=JSON.parse(localStorage.getItem('currentUser')||'')
    let httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + JSON.stringify(user),
      'username': user.username,
      'role': user.role,
    });
    // httpheaders= httpheaders.append('username', user.username);
    // httpheaders= httpheaders.append('role', user.role);
    this.http.get('http://localhost:3000/users', { headers: httpheaders }).subscribe(data => {
    });
}

arr:string[]=['hello', 'bird', 'table', 'football', 'pipe', 'code'];
titleCaseWords: string[] = this.arr.map(word => word.charAt(0).toUpperCase() + word.slice(1));

}

