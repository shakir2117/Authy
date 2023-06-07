import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from 'src/auth.guard';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'access', loadChildren: () => import('./admin-access/admin-access.module').then(m => m.AdminAccessModule) },
  { path: 'cart-prod', loadChildren: () => import('./cart-prod/cart-prod.module').then(m => m.CartProdModule) },
  { path: '', redirectTo: '/home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {




}
