import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
})
export class AuthenticationComponent {
  user: string = "";
  password: string = "";

  constructor(private router: Router) {
  }

  authUser() {
    console.log(this.user, this.password);
    this.router.navigate(['/tabs/tab1']);
  }

}
