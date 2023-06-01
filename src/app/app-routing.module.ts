import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from 'src/auth.guard';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { ProductGuard } from './product.guard';
import { CategoryGuard } from './category.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path : 'category', component: CategoryComponent, canActivate: [AuthGuard,CategoryGuard]},  
  {path : 'product', component: ProductComponent, canActivate: [AuthGuard,ProductGuard]},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] }, // Add AuthGuard to home route
  { path: '', redirectTo: '/home', pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 



  
}
