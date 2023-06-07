import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './sharedmodule/header/header.component';
import { ApikeyInterceptor } from './apikey.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { CategoryComponent } from './cart-prod/category/category.component';
import { CookieService } from 'ngx-cookie-service';
import { NgxUiLoaderModule, NgxUiLoaderConfig,NgxUiLoaderBlurredDirective, NgxUiLoaderRouterModule, NgxUiLoaderHttpModule } from "ngx-ui-loader";
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { AuthModule } from './auth/auth.module';
import { AdminAccessModule } from './admin-access/admin-access.module';
import { SharedmoduleModule } from './sharedmodule/sharedmodule.module';
import { CartProdModule } from './cart-prod/cart-prod.module';


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
    HomeComponent,
  ],
  imports: [
    SharedmoduleModule,
    MatDialogModule,
    // AuthModule,
    // AdminAccessModule,
    // CartProdModule,
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
    {
      provide: MatDialogRef,
      useValue: {}
    },
    CookieService,
    { provide: HTTP_INTERCEPTORS, useClass: ApikeyInterceptor, multi: true }
  ],
  exports: [
    HeaderComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
