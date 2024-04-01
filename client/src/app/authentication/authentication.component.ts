import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {ToastController} from "@ionic/angular";


@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
})
export class AuthenticationComponent {
  user: string = "";
  password: string = "";

  constructor(private router: Router, private http: HttpClient, private toastController: ToastController) {
  }

  async showToast(message: string) {
    const toast = await this.toastController.create({
      position: 'top',
      color: 'danger',
      message: message,
      duration: 2000
    });
    await toast.present();
  }

  authUser() {
    console.log(this.user, this.password);
    this.http.post('http://localhost:3000/auth', {user: this.user, password: this.password}).subscribe((res: any) => {
      console.log(res);
      if (res.token) {
        // localStorage.setItem('token', res.token);
        // localStorage.setItem('user', this.user);
        this.router.navigate(['/tabs/points']);
      }
    }, async () => {
      await this.showToast('User is incorrect');
    });
  }

}
