import { Component, OnInit,AfterViewInit, ViewChild} from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent implements OnInit {

  constructor(private auth: AuthService,private http:HttpClient,private cookie:CookieService) { }

  category: any = [];
  ngOnInit(){
    if(this.cookie.check('category')){
      this.category = JSON.parse(this.cookie.get('category'));
    }
    else{
      this.http.get('http://localhost:3000/category').subscribe((data:any)=>{
        this.category=data
        this.cookie.set('category',JSON.stringify(this.category));
      })
    }

  }
}