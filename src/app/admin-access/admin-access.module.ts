import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { AccessComponent } from './access/access.component';
import { AccesseditComponent } from './accessedit/accessedit.component';
import { SharedmoduleModule } from '../sharedmodule/sharedmodule.module';
import { AccessRoutingModule } from './access-routing.module';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    AccessComponent,
    AccesseditComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AccessRoutingModule,
    CommonModule,
    SharedmoduleModule
  ]
})
export class AdminAccessModule { }
