import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServicesService } from 'src/app/services/auth-services.service';
import { IError } from 'src/app/shared/interfaces/error';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  error!: IError | null;

  constructor(private authServices: AuthServicesService, private router: Router) {

  }

  registerHandler(form: NgForm): void {
    const email: string = form.form.controls.email.value;
    const password: string = form.form.controls.password.value;
    const rePassword: string = form.form.controls.rePassword.value;

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
    } else if (password !== rePassword) {
      this.error = {
        type: 'bad',
        message: "Passwords must match!"
      }
    } else {
      this.error = null;
    }

    if (this.error) {
      return;
    }

    this.authServices.registerUser(email, password)
      .then(res => this.router.navigate(["/login"]))
      .catch(err => {
        console.log(err);

        this.error = {
          type: 'bad',
          message: err.message
        }
      })

  }

}
