import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as React from 'react';
import { render } from 'react-dom';

import reactcomponent from './reactcomponent';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'authandlog';
  // @ViewChild('reactcomponent') reactcomponent!: ElementRef;
  // ngAfterViewInit(){
  //   render(React.createElement(reactcomponent),this.reactcomponent.nativeElement);
  // }
}