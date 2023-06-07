import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';
import { SharedmoduleModule } from '../sharedmodule/sharedmodule.module';
import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
    ],
  imports: [
    AuthRoutingModule,
    CommonModule,
    HttpClientModule,
    MaterialModule,
    SharedmoduleModule
    ]

})
export class AuthModule { }
