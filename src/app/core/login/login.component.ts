import { Component } from '@angular/core';
import { AuthServicesService } from '../../services/auth-services.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { IError } from 'src/app/shared/interfaces/error';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  error!: IError | null;

  constructor(private authService: AuthServicesService, private router: Router) {

  }

  loginHandler(form: NgForm): void {
    const email: string = form.form.controls.email.value;
    const password: string = form.form.controls.password.value;
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email == '') {
      this.error = {
        type: 'bad',
        message: "Email can't be empty"
      }
    } else if (!email.match(mailformat)) {
      this.error = {
        type: 'bad',
        message: "Email must be valid"
      }
    } else if (password == '') {
      this.error = {
        type: 'bad',
        message: "Password can't be empty"
      }
    } else if (password.length < 6 || password.length > 32) {
      this.error = {
        type: 'bad',
        message: "Password must be betwee 6 and 32 chars long"
      }
    } else {
      this.error = null;
    }

    if (this.error) {
      return;
    }

    this.authService.loginUser(email, password)
      .then((res: any) => {
        localStorage.setItem('user', res.userId)
        this.router.navigate(["/"]);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}