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
import { NgxUiLoaderModule, NgxUiLoaderConfig,NgxUiLoaderBlurredDirective, NgxUiLoaderRouterModule, NgxUiLoaderHttpModule } from "ngx-ui-loader";
import { AccessComponent } from './access/access.component';
import { AccesseditComponent } from './accessedit/accessedit.component';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  "bgsColor": "#f64f64",
  "bgsOpacity": 0.5,
  "bgsPosition": "bottom-right",
  "bgsSize": 60,
  "bgsType": "square-jelly-box",
  "blur": 15,
  "delay": 0,
  "fastFadeOut": true,
  "fgsColor": "#f64f64",
  "fgsPosition": "center-center",
  "fgsSize": 60,
  "fgsType": "square-jelly-box",
  "gap": 24,
  "masterLoaderId": "master",
  "overlayBorderRadius": "0",
  "overlayColor": "rgba(40, 40, 40, 0.8)",
  "pbColor": "red",
  "pbDirection": "ltr",
  "pbThickness": 3,
  "hasProgressBar": false,
  "text": "",
  "textColor": "#FFFFFF",
  "textPosition": "center-center",
  "maxTime": -1,
  "minTime": 300
};
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HeaderComponent,
    CategoryComponent,
    ProductComponent,
    AccessComponent,
    AccesseditComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NgxUiLoaderModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderRouterModule,
    NgxUiLoaderHttpModule,
  ],
  providers: [
    CookieService,
    { provide: HTTP_INTERCEPTORS, useClass: ApikeyInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
