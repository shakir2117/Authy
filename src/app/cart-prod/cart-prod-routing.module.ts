import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/auth.guard';
import { CategoryGuard } from '../category.guard';
import { ProductGuard } from '../product.guard';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path : 'category', component: CategoryComponent, canActivate: [AuthGuard,CategoryGuard]},  
  {path : 'product', component: ProductComponent, canActivate: [AuthGuard,ProductGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartProdRoutingModule { }
