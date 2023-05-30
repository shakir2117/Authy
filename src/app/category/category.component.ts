import { Component, OnInit,AfterViewInit, ViewChild} from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent implements OnInit {

  constructor(private auth: AuthService,private http:HttpClient) { }

  category: any = [];
  ngOnInit(): void {
    this.http.get('http://localhost:3000/category').subscribe(data => {
      this.category = data;
      console.log("Category:",this.category)
    });
  }
}