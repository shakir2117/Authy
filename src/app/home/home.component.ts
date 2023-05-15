import { Component,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private http: HttpClient , private route:Router) {}

  ngOnInit() {
    this.http.get('http://localhost:3000/users').subscribe(data => {
      console.log(data);
    });
}

logout(){
  localStorage.clear()
  this.route.navigate(['/login'])
}
}

