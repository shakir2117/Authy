import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { AuthService } from '../../auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  login=this.cookie.check('Username'&&'role');

  ngOnInit() {
    console.log('user login Status is '+ this.login);
  }
  role=this.cookie.get('role');
  username=this.cookie.get('Username');
  constructor(private auth: AuthService, private cookie: CookieService) { }

  logout() {
    this.auth.logout();
  }
}
