import { Component, OnInit,AfterViewInit, ViewChild} from '@angular/core';
import { AuthService } from '../../auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent implements OnInit {
  apiURL = environment.apiurl;

  constructor(private auth: AuthService,private http:HttpClient,private cookie:CookieService) { }

  category: any = [];
  ngOnInit(){
    if(this.cookie.check('category')){
      this.category = JSON.parse(this.cookie.get('category'));
    }
    else{
      this.http.get(this.apiURL+'category').subscribe((data:any)=>{
        this.category=data
        this.cookie.set('category',JSON.stringify(this.category));
      })
    }

  }
}