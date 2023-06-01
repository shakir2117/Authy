import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  apiURL = environment.apiurl;
  constructor(private auth: AuthService,private http:HttpClient,private cookie:CookieService) { }

  product: any = [];

  ngOnInit(){
    if(this.cookie.check('product')){
      this.product = JSON.parse(this.cookie.get('product'));
    }
    else{
      this.http.get(this.apiURL+'product').subscribe((data:any)=>{
        this.product=data;
        this.cookie.set('product',JSON.stringify(this.product));
      })
    }
  }
}
