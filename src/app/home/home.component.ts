import { Component,OnInit} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment.development';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  apiURL = environment.apiurl;
  constructor(private http: HttpClient , private route:Router,private cookie:CookieService) {}

  ngOnInit() {
    let  role = this.cookie.get('role')
    let username=this.cookie.get('Username')

    let httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + username,
      'username': username,
      'role': role,
    });
    // httpheaders= httpheaders.append('username', user.username);
    // httpheaders= httpheaders.append('role', user.role);
    this.http.get(this.apiURL+'users', { headers: httpheaders }).subscribe(data => {
    });
}

arr:string[]=['hello', 'bird', 'table', 'football', 'pipe', 'code'];
titleCaseWords: string[] = this.arr.map(word => word.charAt(0).toUpperCase() + word.slice(1));

}

