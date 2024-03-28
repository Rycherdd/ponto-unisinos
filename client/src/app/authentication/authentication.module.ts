import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthenticationRoutingModule} from "./authentication-routing.module";
import {AuthenticationComponent} from "./authentication.component";
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AuthenticationComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule {
}
