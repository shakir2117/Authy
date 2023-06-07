import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/auth.guard';
import { ProductGuard } from '../product.guard';
import { AccessComponent } from './access/access.component';

const routes: Routes = [
  {path:'access',component:AccessComponent,canActivate:[AuthGuard,ProductGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccessRoutingModule { 

}
