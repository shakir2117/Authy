import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit 
 {
  constructor(private auth: AuthService,private http:HttpClient) { }

  product: any = [];

  ngOnInit(): void {
    this.http.get('http://localhost:3000/product').subscribe(data => {
      this.product = data;
      console.log("Category:",this.product)
    });
  }
}
