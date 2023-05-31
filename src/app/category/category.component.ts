import { Component, OnInit,AfterViewInit, ViewChild} from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent implements OnInit {

  constructor(private auth: AuthService,private http:HttpClient) { }

  category: any = [];
  ngOnInit(){
    if(sessionStorage.getItem('category')){
      this.category = JSON.parse(sessionStorage.getItem('category') || '{}');
    }
    else{
      this.http.get('http://localhost:3000/category').subscribe((data:any)=>{
        this.category=data;
        sessionStorage.setItem('category',JSON.stringify(this.category))
      })
    }

  }
}