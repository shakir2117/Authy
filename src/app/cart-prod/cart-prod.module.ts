import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartProdRoutingModule } from './cart-prod-routing.module';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { SharedmoduleModule } from '../sharedmodule/sharedmodule.module';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    ProductComponent,
    CategoryComponent,
  ],
  imports: [
    CommonModule,
    CartProdRoutingModule,
    SharedmoduleModule,
  ]
})
export class CartProdModule { }
