import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit 
 {
  constructor(private auth: AuthService,private http:HttpClient,private cookie:CookieService) { }

  product: any = [];

  ngOnInit(){
    if(this.cookie.check('product')){
      this.product = JSON.parse(this.cookie.get('product'));
    }
    else{
      this.http.get('http://localhost:3000/product').subscribe((data:any)=>{
        this.product=data;
        this.cookie.set('product',JSON.stringify(this.product));
      })
    }
  }
}
