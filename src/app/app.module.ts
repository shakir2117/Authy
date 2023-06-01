import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthGuard } from 'src/auth.guard';
import { HeaderComponent } from './header/header.component';
import { ApikeyInterceptor } from './apikey.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { CookieService } from 'ngx-cookie-service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HeaderComponent,
    CategoryComponent,
    ProductComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [
    CookieService,
    {provide:HTTP_INTERCEPTORS, useClass:ApikeyInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
